import * as env from 'env-var';

export const config = {
  server: {
    port: env.get('APPLICATION_PORT').default(3000).asPortNumber(),
    name: 'user service',
  },
  db: {
    connectionURL: env
      .get('DB_CONNECTION_URL')
      .default('mongodb://localhost:27017/base-server')
      .asString(),
    connectionURLTest: env
      .get('DB_CONNECTION_URL_TEST')
      .default('mongodb://localhost:27017/base-server-test')
      .asString(),
  },
  maxUserAmountToGet: env.get('MAX_User_TO_GET').default(20).asIntPositive(),
};
