import { check } from 'express-validator';
import { compare } from 'bcrypt';
import db from '../database/db';

const password = check('password')
  .isLength({ min: 8 })
  .withMessage('Password must be at least 8 chars long')
  .matches(/\d/)
  .withMessage('Password must contain a number')
  .matches(/[!@#$%^&*(),.?":{}|<>]/)
  .withMessage('Password must contain a special character');

const usernameExists = check('username').custom(async (value) => {
  const { rows } = await db.query('SELECT * from users WHERE username = $1', [
    value,
  ]);

  if (rows.length) {
    throw new Error('Username already exists.');
  }
});

const username = check('username')
  .isLength({ min: 3 })
  .withMessage('Username must be at least 3 chars long');

const loginFieldsCheck = check('username').custom(async (username, { req }) => {
  const user = await db.query('SELECT * FROM users WHERE username = $1', [
    username,
  ]);
  if (!user.rows.length) {
    throw new Error('Username does not exist');
  }
  const valid = await compare(req.body.password, user.rows[0].password);
  if (!valid) {
    throw new Error('Incorrect password');
  }
  req.user = user.rows[0];
});

export const registerValidation = [password, username, usernameExists];
export const loginValidation = [loginFieldsCheck];
