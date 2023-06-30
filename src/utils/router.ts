import { IncomingMessage, ServerResponse } from "http";
import { UserController } from "../controllers/users";
import { HTTPSTATUS, MESSAGE } from "../types";
import { parseBody } from "./parseBody";

const ENDPOINT = 'api/users';

export const dispatch = async (req:IncomingMessage, res:ServerResponse): Promise<void> => {

    if(req.url){
        const {method,url} = req;
        const _url = url.slice(1);
        const id: string | undefined = _url.split('/').length === 3 ? _url.split('/').pop() : '';
        
        res.setHeader('Content-type','application/json');
    
        if(method === 'GET' && _url === ENDPOINT){
            if(id) await UserController.getUser(id, res);
            else await UserController.getAll(res);
        }
        else if(method === 'POST' && _url === ENDPOINT){
            
            const body = await parseBody(req);
            const user = JSON.parse(body);
            await UserController.create(user,res);
        
        }
        else if(method === 'PUT'){
            console.log('bla')
        } 
        else{
            res.statusCode = HTTPSTATUS.NotFound;
            res.end(JSON.stringify(MESSAGE.EndpointNotFound))
        }
    }
    else{
        res.statusCode = HTTPSTATUS.ServerError;
        res.end(JSON.stringify(MESSAGE.ServerError))
    }
    
}