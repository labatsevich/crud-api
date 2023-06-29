import { IncomingMessage } from "http";

export const parseBody = async (req: IncomingMessage): Promise<string> => {

    return new Promise((resolve, reject) => {
        try {

            let data = '';

            req.on('data', (chunk: Buffer) => {
                data += chunk.toString();
            })
            req.on('end', () => {
                resolve(data);
            })

        } catch (Error) {
            reject(Error);
        }
    })

}