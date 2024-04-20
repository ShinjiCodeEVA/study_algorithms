import { Request, Response } from "express";
import Problem from "../db/models/problem.js";
import { AlgorithmModel, RawAlgorithmModel } from "../types/models.js";

export async function getProblems(req: Request, res: Response): Promise<void> { 
    try { 
        const problems: AlgorithmModel[] = await Problem.getAll();

        res.status(200).json({success: true, message: 'Problems found', data: problems})
    } catch (err) {
        res.status(500).json({success: false, message: 'Error fetching probmlems'})
    }
}