require('dotenv').config();

import { createConnection } from 'typeorm';

const connection = createConnection({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA,
  synchronize: process.env.ENVIRONMENT !== 'production' && true,
  logging: false,
  entities: ['src/app/entity/**/*.ts'],
});

export default function initConnection() {
  connection
    .then(() => {
      process.env.ENVIRONMENT !== 'production' && console.log('Database Connected!');
    })
    .catch(() => {
      process.env.ENVIRONMENT !== 'production' && console.log('Failed in Connection Database!');
    });
}
