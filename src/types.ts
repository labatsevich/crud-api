 export enum HTTPSTATUS  {
    Success = 200,
    Created = 201,
    Deleted = 204,
    Invalid = 400,
    NotFound = 404,
    ServerError = 500
    
}

export interface User {
    id: string,
    username: string;
    age: number;
    hobbies?: Array<string>[];
  }