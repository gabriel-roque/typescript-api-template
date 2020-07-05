import { Router } from 'express';
import mung from 'express-mung';
import api from '@api/version';

export function modifyBodyResponse(routes: Router) {
  routes.use(
    mung.json((body) => {
      body = { api: { ...api.payload }, ...body };
      return body;
    }),
  );
}
