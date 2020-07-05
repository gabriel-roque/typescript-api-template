import { Router, Request, Response, NextFunction } from 'express';
import api from '@api/version';

export function setHeaderResponse(routes: Router) {
  routes.use((request: Request, response: Response, next: NextFunction) => {
    response.setHeader('X-API-VERSION', api.version);
    response.setHeader('X-API-ORIGIN', api.payload.origin);
    next();
  });
}
