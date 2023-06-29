import {validate} from 'uuid';
import { User } from '../types';

export const Validator = {
    
    checkId(id:string):boolean{
        return validate(id);
    },

    checkUser(user:User):boolean{
    
        return true;
    }



}