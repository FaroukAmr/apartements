import {
  createApartement,
  getApartement,
  getApartements,
} from '../controllers/apartements';

import express from 'express';
import userAuth from '../middleware/auth';
import validate from '../middleware/validations';

const router = express.Router();

router.post('/', validate, createApartement);
router.get('/', validate, getApartements);
router.get('/:id', validate, getApartement);

export default router;
