import { db } from "../index.js"; 

// GET ALL SOLUTIONS
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

// GET SINGLE SOLUTION
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

// CREATE ENTRY
export const createEntry = async (req, res) => { 
    const { title, tags, readTime, description, platform, solutionExplanation, testcase, 
            bruteForceHeading, bruteForceSteps, bruteForceSummary, bruteForceImage, 
            efficientHeading, efficientSteps, efficientSummary, efficientImage, replit } = req.body

    try {
        // Insert into 'efficient' table
        const [efficientResult] = await db.query(`INSERT INTO efficient (eHeading, eSteps, eSummary, eImage)
                                                  VALUES (?, ?, ?, ?)`, 
                                                  [efficientHeading, efficientSteps, efficientSummary, efficientImage]);

        const efficientId = efficientResult.insertId;

        // Insert into 'bruteforce' table
        const [bruteForceResult] = await db.query(`INSERT INTO bruteforce (bHeading, bSteps, bSummary, bImage)
                                                   VALUES (?, ?, ?, ?)`, 
                                                   [bruteForceHeading, bruteForceSteps, bruteForceSummary, bruteForceImage]);

        const bruteForceId = bruteForceResult.insertId;

        // Insert into 'blogpost' table
        await db.query(`INSERT INTO blogpost (title, tags, readTime, description, solutionExplanation, bruteForceId, efficientId, testcase, platform, replit)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                        [title, tags, readTime, description, solutionExplanation, bruteForceId, efficientId, testcase, platform, replit]);

        res.status(200).json({ message: 'Entry created successfully' });
    } catch(error) {
        console.error('Error creating entry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
