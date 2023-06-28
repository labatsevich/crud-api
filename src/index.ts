import http, { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT) || 4000;

const server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    res.setHeader('Content-type','text/html');
    res.write(`<div style="color:red">server started on ${PORT}</div>`);
    res.end()
})

server.listen(PORT, 'localhost',()=>{
    console.log(`server started on ${PORT}`)
})