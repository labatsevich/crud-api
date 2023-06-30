export enum HTTPSTATUS  {
    Success = 200,
    Created = 201,
    Deleted = 204,
    Invalid = 400,
    NotFound = 404,
    ServerError = 500   
}

export enum MESSAGE {
  ServerError = 'Server error',
  NotFound = 'NotFound',
  InvalidId = 'Not uuid',
  NotExist = 'User doesn\'t exist',
  EndpointNotFound ='Endpoint doesn\'t exist',
  BadInput = 'Doesn\'t contain required fields or invalid data'
}

export interface IUser {
    id: string,
    username: string;
    age: number;
    hobbies: Array<string>[];
  }

  export type Store =  IUser[];
  