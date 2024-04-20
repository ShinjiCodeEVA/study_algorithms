import express from 'express'
import { getProblems } from '../api/problem.js';

const router = express.Router();

router.get('/problems', getProblems);

export default router;