import { Request, Response } from 'express';

class RootController {
  async index(request: Request, response: Response) {
    return response.status(200).send({
      generic: 'Hello Wolrd!',
    });
  }
}

export default new RootController();
