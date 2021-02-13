import User from './models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import endpoints from './endpoints.config';

interface AgeMap {
  firstName: string,
  lastName: string,
  email: string,
  password: string
};

// 注册接口
interface AUInt {
  email: string,
  password: string,
};

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

export const resolvers = {
  Query: {
    authUser: async (_:String, { email, password }:AUInt) => {
      const doc = await User.findOne({ email: email }).select({ passwordHash: 1 });
      const ans = await bcrypt.compare(password, doc!.passwordHash);
      if(!ans) {
        throw new Error (
          'Incorrect Pass'
        )
      }

      const token = jwt.sign({_id: doc!._id}, endpoints.TOKEN_SECRET);
      return {token: token};
    }
  },
  Mutation: {
    createUser: async (_:string, { firstName , lastName, email, password }:AgeMap) => {
      // 延迟两秒
      await delay(2000);

      // 搜查同一邮件
      const emailCheck = await User.findOne({ email: email });
      if(emailCheck) {
        throw new Error (
          `${email} already exists!`
        );
      };

      // 如果没有一样的邮件继续
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      const savedUser = new User({ firstName: firstName, lastName: lastName, email: email, passwordHash: hashed });
      return savedUser.save();
    }
  }
};