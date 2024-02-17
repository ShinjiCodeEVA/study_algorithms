import { db } from "../index.js"; 

export const getAllSolutions = async (req, res) => {
    const category = req.query.category

    try {
        const solutions = await db.query(`SELECT * FROM blogpost
                                          WHERE blogpost.tags = (?) `, [category])
        res.status(200).json(solutions[0])
    } catch(error) {
        res.status(500).json({error: 'Internal server error'})
    }
}

export const getSingleSolution = async (req, res) => {
    const { id } = req.params

    try {
        const solution = await db.query(`SELECT * FROM blogpost
                                         INNER JOIN efficient ON blogpost.efficientId = efficient.id
                                         INNER JOIN bruteforce ON blogpost.bruteForceId = bruteforce.id 
                                         WHERE blogpost.id = (?) `, [id])
        res.status(200).json(solution[0])
    } catch(error) {
        res.status(500).json('Internal server error')
    }
}