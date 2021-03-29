import * as mongoose from 'mongoose';
import { Server } from './server';
import { config } from './config';

(async () => {

  mongoose.connection.on('connecting', () => {
    console.log('[MongoDB] connecting...');
  });

  mongoose.connection.on('connected', () => {
    console.log('[MongoDB] connected');
  });

  mongoose.connection.on('error', (error) => {
    console.log('[MongoDB] error', { additionalInfo: error });
    process.exit(1);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('[MongoDB] disconnected');
    process.exit(1);
  });

  await mongoose.connect(config.db.connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  Server.startServer();
})();
