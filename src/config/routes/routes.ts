import { Router } from 'express';
import { initSettingRouterServer } from './settings';

/* SETTINGS ROUTES SERVER */
const routes = Router();
initSettingRouterServer(routes);

/* CONTROLLERS */
import RootController from '@controllers/RootController';

/* Root Routes */
routes.get('/', RootController.index);

export default routes;
