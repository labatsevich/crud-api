import { User } from "../types"
import { users } from "../data"
import {v1 as uuid } from 'uuid'

export const UserModel = {

     async getAll(): Promise<User[]>{
        return users;
    },

    async add(user:User):Promise<User|undefined> {
        
        if(user.username){
            user.id = uuid();
            users.push(user);
            return user;
          }
            
          return undefined;
    },

    async findOrFail(id:string): Promise<User|undefined> {
        return users.find(item => item.id === id);
    }


}

