import { createLogger, format, transports } from 'winston';

// import config from './constants';

const logger = createLogger({
  transports: [
    new transports.Console(),
    // new transports.MongoDB({
    //   db: config.MONGODB_URI ?? '',
    //   options: { useUnifiedTopology: true },
    //   collection: 'logs',
    // }),
  ],
  format: format.combine(
    format.timestamp(),
    format.metadata(),
    format.prettyPrint(),
    format.errors({ stack: true })
  ),
});

export default logger;
