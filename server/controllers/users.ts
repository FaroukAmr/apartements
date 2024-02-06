import { Request, Response } from 'express';

import { User } from '../models/User';
import config from '../constants';
import { hash } from 'bcrypt';
import logger from '../logger';
import pool from '../database/db';
import { sign } from 'jsonwebtoken';

export async function registerUser(req: Request, res: Response) {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await hash(password, 10);
    await pool.query<User>(
      'INSERT INTO users (username,password,role) VALUES ($1,$2,$3) RETURNING *',
      [username, hashedPassword, role]
    );

    return res.status(201).json({
      success: true,
      message: 'User created successfully',
    });
  } catch (err: any) {
    logger.error(`Failed to register user`, err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    const user: User = (req as any).user as User;
    const payload = {
      username: user.username,
      role: user.role,
      balanceInCents: user.balanceInCents,
    };
    const token = sign(payload, config.SECRET!);
    return res.status(200).cookie('token', token, { httpOnly: true }).json({
      success: true,
      message: 'User logged in successfully',
    });
  } catch (err: any) {
    logger.error(`Failed to login user`, err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

export async function logoutUser(req: Request, res: Response) {
  try {
    return res.status(200).clearCookie('token').json({
      success: true,
      message: 'User logged out successfully',
    });
  } catch (err: any) {
    logger.error(`Failed to logout user`, err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
