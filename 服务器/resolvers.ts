import User from "./models/User";

interface AgeMap {
  firstName: String,
  lastName: String,
  email: String,
  password: String
}

interface int1 {
  email: String,
}

export const resolvers = {
  Query: {
    getUser: async (_:String, { email }:int1) => await User.findOne({email: email})
  },
  Mutation: {
    createUser: async (_:String, { firstName , lastName, email, password }:AgeMap) => {
      const savedUser = new User({ firstName: firstName, lastName: lastName, email: email, password: password });
      return savedUser.save();
    }
  }
};