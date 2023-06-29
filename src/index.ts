import {createServer} from 'http';
import dotenv from 'dotenv';
import { dispatch } from './utils/router';

dotenv.config();
const PORT = Number(process.env.PORT) || 4000;

const server = createServer(dispatch);

server.listen(PORT, 'localhost',()=>{
    console.log(`server started on ${PORT}`)
})