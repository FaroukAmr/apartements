import { Request, Response } from 'express';

import { User } from '../models/User';
import { UserTypes } from '../models/UserTypes.enum';
import logger from '../logger';
import pool from '../database/db';

export async function deposit(req: Request, res: Response) {
  try {
    const user = req.user as User;
    if (user.role !== UserTypes.BUYER) {
      return res.status(401).json({
        success: false,
        message: 'Only buyers can deposit money.',
      });
    }
    const {
      fiveCents = 0,
      tenCents = 0,
      twentyCents = 0,
      fiftyCents = 0,
      hundredCents = 0,
    } = req.body;

    const totalDeposit =
      fiveCents * 5 +
      tenCents * 10 +
      twentyCents * 20 +
      fiftyCents * 50 +
      hundredCents * 100;

    const data = await pool.query<User>(
      'UPDATE users SET  balance_in_cents=balance_in_cents+$1 WHERE id=$2 RETURNING *',
      [totalDeposit, user.id]
    );
    let { password, ...userData } = data.rows[0];
    return res.status(200).json({
      success: true,
      message: 'Deposit successful',
      data: userData,
    });
  } catch (err: any) {
    logger.error(`Failed to deposit money`, err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

export async function reset(req: Request, res: Response) {
  try {
    const user = req.user as User;
    const data = await pool.query<User>(
      'UPDATE users SET  balance_in_cents=0 WHERE id=$1 RETURNING *',
      [user.id]
    );
    let { password, ...userData } = data.rows[0];
    return res.status(200).json({
      success: true,
      message: 'Reset successful',
      data: userData,
    });
  } catch (err: any) {
    logger.error(`Failed to reset balance`, err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
