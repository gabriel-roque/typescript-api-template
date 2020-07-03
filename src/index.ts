import express, { Request, Response } from 'express';

const server = express();

server.use(express.json());

server.get('/', (request: Request, response: Response) => {
  return response.status(200).send({ status: 'OKAY!' });
});

server.listen(process.env.PORT || 3000);
