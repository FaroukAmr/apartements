import {
  createApartement,
  getApartement,
  getApartements,
} from '../controllers/apartements';

import express from 'express';
import userAuth from '../middleware/auth';
import validate from '../middleware/validations';

const router = express.Router();

router.post('/', userAuth, validate, createApartement);
router.get('/', userAuth, validate, getApartements);
router.get('/:id', userAuth, validate, getApartement);

export default router;
