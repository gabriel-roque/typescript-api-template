import 'module-alias/register';

import 'reflect-metadata';

import app from '@server/server';

import connectionDatabase from '@database/connection';

connectionDatabase();

app.server.listen(process.env.PORT || 3000);
