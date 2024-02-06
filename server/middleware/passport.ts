import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import config from '../constants';
import db from '../database/db';
import passport from 'passport';

const cookieExtractor = function (req: Request) {
  let token = null;
  if (req && req.cookies) token = req.cookies['token'];
  return token;
};

const opts = {
  secretOrKey: config.SECRET!,
  jwtFromRequest: cookieExtractor,
};

passport.use(
  new Strategy(opts, async ({ username }, done) => {
    try {
      const { rows } = await db.query(
        'SELECT * FROM users WHERE username = $1',
        [username]
      );

      if (!rows.length) {
        throw new Error('401 not authorized');
      }

      let user = {
        id: rows[0].id,
        username: rows[0].username,
        role: rows[0].role,
        balanceInCents: rows[0].balance_in_cents,
      };

      return done(null, user);
    } catch (error: any) {
      done(null, false);
    }
  })
);
