import { IUser } from "../types"
import { users } from "../data"
import {v4 as uuid } from 'uuid'

export const UserModel = {

     async getAll(): Promise<IUser[]>{
        return users;
    },

    async add(user:IUser):Promise<IUser|undefined> {
        
        if(user.username){
            user.id = uuid();
            users.push(user);
            return user;
          }
            
          return undefined;
    },

    async find(id:string): Promise<IUser|null> {
        
        const user = users.find(item => item.id === id);
        
        if(!user) return null;
        
        return user;
    },

    async delete(id:string):Promise<void|null> {
        
        const user  = await this.find(id);

        if(user) { 

            users.filter(item => item.id!==id);
        }

    },


}

