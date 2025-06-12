// userResolver.ts
import UserModel from "../model/User.js";

export const resolvers = {
    Query: {
        getTodos: async () =>
            await UserModel.find(),
        getUserByName:
            async (_: any, { name }:
                { name: String }) =>
                await UserModel.findOne({ name }),
        users: async () => await UserModel.find(),
        user: async (_: any, { id }: { id: string }) => await UserModel.findById(id),
    },
    Mutation: {
        createUser: async (_: any, { name, email }: any) => {
            const user = new UserModel({ name, email });
            return await user.save();
        },
        updateUser: async (_: any, { id, name, email }: any) => {
            return await UserModel.findByIdAndUpdate(id, { name, email }, { new: true });
        },
        deleteUser: async (_: any, { id }: any) => {
            await UserModel.findByIdAndDelete(id);
            return true;
        },
    },
};
