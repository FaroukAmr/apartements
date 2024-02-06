import { createApartement, getApartements } from '../controllers/apartements';

import express from 'express';
import userAuth from '../middleware/auth';
import validate from '../middleware/validations';

const router = express.Router();

router.post('/', userAuth, validate, createApartement);
router.get('/', userAuth, validate, getApartements);

export default router;
