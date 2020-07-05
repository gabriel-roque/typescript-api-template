require('dotenv').config();

const VERSION = 'v1';

const api = {
  version: VERSION,
  prefix: `/${VERSION}/api`,
  app_url: '',
  payload: {
    version: VERSION,
    origin: 'template-api',
  },
};

api.app_url = `${process.env.APP_URL}${api.prefix}`;

export default api;
