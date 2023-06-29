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

    async find(id:string): Promise<User|null> {
        
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

