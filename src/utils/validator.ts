import {validate} from 'uuid';
import { IUser } from '../types';

export const Validator = {

    checkRequired(user:IUser){
        return (('username' in user) && ('age' in user) && ('hobbies' in user));
    },

    checkAge(user:IUser): boolean {
        if(typeof user.age !== 'number') return false;
        return true;
    },
    
    checkName(user:IUser):boolean{
        if(typeof user.username !== 'string') return false;
        return true;
    },

    checkHobbies(user:IUser):boolean {
        if(!Array.isArray(user.hobbies) || user.hobbies.length === 0 || user.hobbies.some((h) => typeof h !=='string')) return false;
        return true;
    },

    checkUser(user:IUser):boolean {
        
        if(!this.checkRequired(user)) return false;

        return this.checkAge(user) && this.checkName(user) && this.checkHobbies(user);
        
    },

    checkUUID(id:string):boolean{
        return validate(id);
    },
}