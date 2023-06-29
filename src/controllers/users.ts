import { HTTPSTATUS, User } from "../types";
import { UserModel } from "../models/users";
import { ServerResponse } from "http";

export const UserController = {

  async getAll(res: ServerResponse): Promise<void> {

    try {
      const entries = await UserModel.getAll();
      res.statusCode = HTTPSTATUS.Success;
      res.write(JSON.stringify(entries));
    } catch {
      res.statusCode = HTTPSTATUS.ServerError;
      res.write(JSON.stringify({
        error: 'Server error'
      }));
    }
  },

  async getUser(id: string, res: ServerResponse): Promise<void> {

    try {

      const user = await UserModel.find(id);

      if (user) {
        res.statusCode = HTTPSTATUS.Success;
        res.write(JSON.stringify(user));
      }
      else {
        res.statusCode = HTTPSTATUS.NotFound;
        res.write(JSON.stringify({
          error: 'User not found'
        }))
      }
    }
    catch {
      res.statusCode = HTTPSTATUS.ServerError;
      res.write(JSON.stringify({
        error: 'Server error'
      }))
    }
  },

  async create(user: User, res: ServerResponse): Promise<void> {

    try {
      await UserModel.add(user);
    } catch {
      res.statusCode = HTTPSTATUS.ServerError;
      res.write(JSON.stringify({
        message: 'Internal server error'
      }))
    }
  }

}

