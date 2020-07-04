import { Router } from 'express';
import { configCORS } from '@server/cors';
import cors from 'cors';

const routes = Router();
routes.use(cors(configCORS));

import RootController from '@controllers/RootController';

routes.get('/', RootController.index);

export default routes;
