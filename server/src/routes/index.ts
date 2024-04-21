import express from 'express'
import { getProblems, insertProblem } from '../api/problem.js';

const router = express.Router();

router.get('/problems', getProblems);

router.post('/problems/create', insertProblem);

export default router;