import { HTTPSTATUS, IUser, MESSAGE } from "../types";
import { UserModel } from "../models/users";
import { ServerResponse } from "http";
import { Validator } from "../utils/validator";
import { response } from "../utils/response";

export const UserController = {

  async getAll(res: ServerResponse): Promise<void> {

    try {
      const entries = await UserModel.getAll();
      res.statusCode = HTTPSTATUS.Success;
      res.write(JSON.stringify(entries));
    } catch {

      res.statusCode = HTTPSTATUS.ServerError;
      res.write(JSON.stringify({
        error: MESSAGE.ServerError
      }));

    }
  },

  async getUser(id: string, res: ServerResponse): Promise<void> {

    if (Validator.checkUUID(id)) {

      try {

        const user = await UserModel.find(id);

        if (user) {
          res.statusCode = HTTPSTATUS.Success;
          res.write(JSON.stringify(user));
        }
        else {

          res.statusCode = HTTPSTATUS.NotFound;
          res.write(JSON.stringify({ error: MESSAGE.NotFound }))

        }
      }
      catch {
        res.statusCode = HTTPSTATUS.ServerError;
        res.write(JSON.stringify({ error: MESSAGE.ServerError }))
      }
    }
    else {
      res.statusCode = HTTPSTATUS.Invalid;
      res.write(JSON.stringify({ error: MESSAGE.InvalidId }))
    }
  },

  async create(user: IUser, res: ServerResponse): Promise<void> {

    if (Validator.checkUser(user)) {
      const newUser = await UserModel.add(user);
      response(res,HTTPSTATUS.Created,newUser);
    }
    else {
      response(res,HTTPSTATUS.Invalid,MESSAGE.BadInput)
    }
      
  },

  async update(id: string, res: ServerResponse): Promise<void> {

    if (!Validator.checkUUID(id)) {

      response(res,HTTPSTATUS.Invalid,MESSAGE.InvalidId)

    }
    else {

      try {
        const user = await UserModel.find(id);

        if (user) {
          res.statusCode = HTTPSTATUS.Success;
          res.write(JSON.stringify(user));
        }
        else {

          res.statusCode = HTTPSTATUS.NotFound;
          res.write(JSON.stringify({ error: MESSAGE.NotFound }))

        }
      }
      catch {
        res.statusCode = HTTPSTATUS.ServerError;
        res.write(JSON.stringify({ error: MESSAGE.ServerError }))
      }

    }
  }

}

