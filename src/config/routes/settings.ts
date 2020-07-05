import { Router } from 'express';

import { configCORS } from '@server/cors';
import cors from 'cors';

import { modifyBodyResponse } from '@middlewares/ModifyBodyResponse';
import { setHeaderResponse } from '@middlewares/setHeaderResponse';

export function initSettingRouterServer(routes: Router) {
  /* CORS */
  routes.use(cors(configCORS));
  /* MIDDLEWARES */
  modifyBodyResponse(routes);
  setHeaderResponse(routes);
}
