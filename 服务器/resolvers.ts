import User from "./models/User";

interface AgeMap {
  firstName: String,
  lastName: String,
  email: String,
  password: String
}

export const resolvers = {
  Query: {
    getUser: () => User.find({})
  },
  Mutation: {
    createUser: async (_:String, { firstName , lastName, email, password }:AgeMap) => {
      const savedUser = new User({ firstName: firstName, lastName: lastName, email: email, password: password });
      return savedUser.save();
    }
  }
};