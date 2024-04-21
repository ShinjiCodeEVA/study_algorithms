import { Request, Response } from "express";
import Problem from "../db/models/problem.js";
import { AlgorithmModel } from "../types/models.js";

export async function getProblems(req: Request, res: Response): Promise<void> { 
    try { 
        const problems: AlgorithmModel[] = await Problem.getAll();
        res.status(200).json({success: true, message: 'Problems found', data: problems})
    } catch (err) {
        res.status(500).json({success: false, message: 'Error fetching problems'})
    }
}

export async function insertProblem(req: Request, res: Response): Promise<void> { 
    try { 
        const result = await Problem.insert(req.body)
        res.status(200).json({success: true, message: 'Successfull inserting problem', data: []})
    } catch(err) {
        res.status(500).json({success: false, message: err})
    }
}