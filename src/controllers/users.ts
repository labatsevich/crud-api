import { HTTPSTATUS, User } from "../types";
import { UserModel } from "../models/users";
import { ServerResponse } from "http";

export const UserController = {

  async getAll(res:ServerResponse): Promise<void> {

    const entries = await UserModel.getAll();
    res.statusCode = HTTPSTATUS.Success;
    res.write(JSON.stringify(entries));
    
  },

  async getUser(id: string): Promise<User | unknown> {

    const user = await UserModel.findOrFail(id);
    return user;

  },

  async create(user: User): Promise<User | undefined> {
    return UserModel.add(user);
  }

}

