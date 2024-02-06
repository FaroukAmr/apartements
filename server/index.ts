import './middleware/passport';
import 'winston-mongodb';

import apartementsRouter from './routes/apartements';
import config from './constants';
import cookiesParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import expressWinston from 'express-winston';
import logger from './logger';
import passport from 'passport';
import rateLimit from 'express-rate-limit';
import usersRouter from './routes/users';

const app = express();
app.use(express.json());
app.use(cookiesParser());
app.use(cors({ origin: config.CLIENT_URL, credentials: true }));
app.use(passport.initialize());

app.use(
  expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true,
  })
);

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5000, // limit each IP to 5000 requests per windowMs
  message: 'Too many requests from this IP, please try again late',
});

app.use('/users', limiter, usersRouter);
app.use('/apartements', limiter, apartementsRouter);
app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`);
});
