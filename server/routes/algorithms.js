import express from 'express'
import { getAllSolutions, getSingleSolution } from '../controller/algorithmsController.js'

const router = express.Router()

router.get('/', getAllSolutions)

router.get('/:category/:id', getSingleSolution)

export default router 