import express from 'express'
import { getAllSolutions, getSingleSolution, createEntry } from '../controller/algorithmsController.js'

const router = express.Router()

router.get('/', getAllSolutions)

router.get('/:category/:id', getSingleSolution)

router.post('/create', createEntry)

export default router 