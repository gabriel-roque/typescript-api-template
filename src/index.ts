import 'module-alias/register';

import server from '@server/server';

server.config.listen(process.env.PORT || 3000);
