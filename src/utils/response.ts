import { ServerResponse } from "http";
import { HTTPSTATUS, IUser } from "../types";

export const response = (_res:ServerResponse, _statusCode: HTTPSTATUS,_payload: IUser[] | string | IUser) => {

    _res.writeHead(_statusCode,{ 'Content-Type': 'application/json' })
    _res.end(JSON.stringify(_payload));

}