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
  synchronize: process.env.NODE_ENV !== 'production' && true,
  logging: false,
  entities: process.env.NODE_ENV === 'production' ? ['dist/app/entity/**/*.ts'] : ['src/app/entity/**/*.ts'],
});

export default function initConnection() {
  connection
    .then(() => {
      console.log('Database Connected!');
    })
    .catch((error) => {
      process.env.NODE_ENV !== 'production' && console.log(`Failed in Connection Database! error: ${error}`);
    });
}
