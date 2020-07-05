import express, { Express } from 'express';

import api from '@api/version';
import routes from '@routes';

class Server {
  public server: Express;

  constructor() {
    this.server = express();
    this.server.use(express.json());
    this.server.use(api.prefix, routes);
  }
}

export default new Server();
