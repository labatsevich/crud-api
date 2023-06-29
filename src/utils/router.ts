import { IncomingMessage, ServerResponse } from "http";
import { UserController } from "../controllers/users";
import { HTTPSTATUS } from "../types";
import { parseBody } from "./parseBody";

const ENDPOINT = '/api/users';

export const dispatch = async (req:IncomingMessage, res:ServerResponse): Promise<void> => {

    const {method,url} = req;
    res.setHeader('Content-type','application/json');

    if(method === 'GET' && url === ENDPOINT){
        await UserController.getAll(res);
    }
    else if(method === 'POST' && url === ENDPOINT){
        
        const body = await parseBody(req);
        const user = JSON.parse(body);
        const result = await UserController.create(user);

        if(result){
            res.statusCode = HTTPSTATUS.Created;
            res.write(JSON.stringify(result));
        }
        else{
            res.statusCode = HTTPSTATUS.ServerError;
            res.write('Something went wrong')
        }
        
    }
    else if(method === 'PUT'){
        console.log('bla')
    } 
    else{
        res.statusCode = HTTPSTATUS.NotFound;
        res.write(JSON.stringify({
            error:'Unknown url'
        }))
    }

    res.end();
}