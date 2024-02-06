import { Request, Response } from 'express';

import { Apartement } from '../models/Apartement';
import logger from '../logger';
import pool from '../database/db';

export async function createApartement(req: Request, res: Response) {
  try {
    const apartement: Apartement = req.body;
    const newApartement = await pool.query<Apartement>(
      'INSERT INTO apartements (price,location,developer,bedrooms,bathrooms,type,area,image,description,name) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *',
      [
        apartement.price,
        apartement.location,
        apartement.developer,
        apartement.bedrooms,
        apartement.bathrooms,
        apartement.type,
        apartement.area,
        apartement.image,
        apartement.description,
        apartement.name,
      ]
    );
    return res.status(201).json({
      success: true,
      message: 'Apartement created successfully',
      data: newApartement.rows[0],
    });
  } catch (err: any) {
    logger.error(`Failed to get apartements`, err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

export async function getApartements(req: Request, res: Response) {
  try {
    const apartements = await pool.query<Apartement>(
      'SELECT * FROM apartements'
    );
    return res.status(200).json({
      success: true,
      message: 'Apartements fetched successfully',
      data: apartements.rows,
    });
  } catch (err: any) {
    logger.error(`Failed to get apartements`, err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
