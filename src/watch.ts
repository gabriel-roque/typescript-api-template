import 'reflect-metadata';

import connectionDatabase from '@database/connection';

connectionDatabase();

import app from '@server/server';

app.server.listen(process.env.PORT || 3000);
