import express, { Express } from 'express';

// const server = express();

import api from '@api/version';
import routes from '@routes';

// server.use(api.prefix, routes);

// server.use(express.json());

// export default server;

class Server {
  public config: Express;

  constructor() {
    this.config = express();
    this.config.use(express.json());
    this.config.use(api.prefix, routes);
  }
}

export default new Server();
