import { Request, Response } from "express";
import Problem from "../db/models/problem.js";
import { AlgorithmModel } from "../types/models.js";


export function problem(req: Request, res: Response): Promise<void> | undefined {
    const httpMethod = req.method;

    switch (httpMethod) {
        case "GET":
            return getProblems(req, res);
        case "POST":
            return insertProblem(req, res);
    }

    return undefined; 
}

async function getProblems(req: Request, res: Response): Promise<void> {   
    try { 
        
        const params = req.params.category;
        const problem_id = req.query.problem_id;

        // if getting problems by category
        if (!problem_id  && params) { 
            const problemsByCategory = await Problem.getByCategory(params.substring(0, 1).toUpperCase() + params.substring(1));
            
            if (problemsByCategory.length == 0) { 
                res.status(500).json({success: false, message: 'Problems not found', data: problemsByCategory});
                return;
            }

            res.status(200).json({success: true, message: 'Problems found', data: problemsByCategory});
            return;
        }

        
        // if getting single problem
        if (problem_id) { 
            const problemsById = await Problem.findOne(parseInt(problem_id.toString()));
            res.status(200).json({success: true, message: 'Problems found', data: problemsById});
            return;
        }

        // if getting all problems 
        const problems: AlgorithmModel[] = await Problem.getAll();
        res.status(200).json({success: true, message: 'Problems found', data: problems})

    } catch (err) {
        res.status(500).json({success: false, message: 'Error fetching problems'})
    }
}


async function insertProblem(req: Request, res: Response): Promise<void> { 
    try { 
        const result = await Problem.insert(req.body)
        res.status(200).json({success: true, message: 'Successfull inserting problem', data: []})
    } catch(err) {
        res.status(500).json({success: false, message: err})
    }
}
