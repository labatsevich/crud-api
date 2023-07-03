import { HTTPSTATUS, IUser } from "../types"
import data  from "../data"
import {v4 as uuid } from 'uuid'
import { response } from "../utils/response";

export const UserModel = {

     async getAll(): Promise<IUser[]>{
        return data.users;
    },

    async add(user:IUser):Promise<IUser> {
        
            user.id = uuid();
            data.users.push(user);
            
            return user;
          
    },

    async find(id:string): Promise<IUser|null> {
        
        const user = data.users.find(item => item.id === id);
        
        if(!user) return null;
        
        return user;
    },

    async delete(id:string):Promise<void> {
        
        const user  = await this.find(id);

        if(user) { 

           data.users = data.users.filter(item => item.id!==id);
        }

    }


}

