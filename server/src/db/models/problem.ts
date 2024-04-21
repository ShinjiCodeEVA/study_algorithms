import Database from "../index.js";
import { AlgorithmModel, RawAlgorithmModel, SQLUpdateResult } from "../../types/models.js";
import { ResultSetHeader } from "mysql2";

class Problem { 
    
    private static defaultQuery = `SELECT
                                p.*,
                                MAX(CASE WHEN t.problem_id = p.problem_id THEN t.testCase_id END) AS testcase1_id, 
                                MAX(CASE WHEN t.problem_id = p.problem_id THEN t.input END) AS testcase1_input,  
                                MAX(CASE WHEN t.problem_id = p.problem_id THEN t.output END) AS testcase1_output,
                                MAX(CASE WHEN t.problem_id = p.problem_id THEN t.explanation END) AS testcase1_explanation,
                                
                                MAX(CASE WHEN t.problem_id = p.problem_id AND (t.problem_id * 2) = testCase_id THEN t.testCase_id END) AS testcase2_id, 
                                MAX(CASE WHEN t.problem_id = p.problem_id AND (t.problem_id * 2) = testCase_id THEN t.input END) AS testcase2_input,
                                MAX(CASE WHEN t.problem_id = p.problem_id AND (t.problem_id * 2) = testCase_id THEN t.output END) AS testcase2_output,
                                MAX(CASE WHEN t.problem_id = p.problem_id AND (t.problem_id * 2) = testCase_id THEN t.explanation END) AS testcase2_explanation,
                                
                                MAX(CASE WHEN s.category = 'bruteforce' THEN s.solution_id END) AS bruteforce_id,
                                MAX(CASE WHEN s.category = 'bruteforce' THEN s.heading END) AS bruteforce_heading,
                                MAX(CASE WHEN s.category = 'bruteforce' THEN s.steps END) AS bruteforce_steps,
                                MAX(CASE WHEN s.category = 'bruteforce' THEN s.image END) AS bruteforce_image,
                                
                                MAX(CASE WHEN s.category = 'efficient' THEN s.solution_id END) AS efficient_id,
                                MAX(CASE WHEN s.category = 'efficient' THEN s.heading END) AS efficient_heading,
                                MAX(CASE WHEN s.category = 'efficient' THEN s.steps END) AS efficient_steps,
                                MAX(CASE WHEN s.category = 'efficient' THEN s.image END) AS efficient_image,
                                d.code_id,
                                d.replit AS replit_link
                            FROM  
                                problem p
                            INNER JOIN
                                solution s ON p.problem_id = s.problem_id
                            INNER JOIN
                                decode d ON p.problem_id = d.problem_id
                            INNER JOIN
                                testcase t ON p.problem_id = t.problem_id
                            GROUP BY
                                p.problem_id;`

    private static queryString = `
                                    SELECT p.*,
                                        t.testCase_id, t.input, t.output, t.explanation,
                                        s.category, s.heading, s.steps, s.image,
                                        d.replit
                                    FROM problem as p
                                    INNER JOIN testcase as t ON (p.problem_id = t.problem_id)
                                    INNER JOIN solution as s ON (p.problem_id = s.problem_id)
                                    INNER JOIN decode as d ON (p.problem_id = d.problem_id)`


    private static insertQuery = `
                                    INSERT INTO problem (tags, platform, readTime, description, statement, image)
                                    VALUES (?, ?, ?, ?, ?);
                                    
                                    -- Store the last inserted ID from the problem table
                                    SET @problem_id = LAST_INSERT_ID(); 
                                    
                                    INSERT INTO solution (category, heading, steps, image, problem_id)
                                    VALUES (?, ?, ?, null, @problem_id);
                                                        
                                    INSERT INTO solution  (category, heading, steps, image, problem_id)
                                    VALUES (?, ?, ?, ?, @problem_id); 
                                                        
                                    INSERT INTO decode (replit, problem_id)
                                    VALUES (?, @problem_id);
                                    
                                    INSERT INTO testcase (input, output, explanation, problem_id)
                                    VALUES (?, ?, ?,  @problem_id),
                                           (?, ?, ?,  @problem_id);
            
    `                                

                          
    public static async getAll(): Promise<AlgorithmModel[]>  {
        return new Promise(async (resolve, reject) => { 

            const db = Database.getInstance();

            try { 

                const res: RawAlgorithmModel[] = await db.query<RawAlgorithmModel[]>(Problem.queryString, []);
                const problems: AlgorithmModel[] = []

                for (const item of res) {
                 
                    if (item) {
                        const {problem_id, tags, platform, title, readTime, description, statement, image, testCase_id, input, output, explanation,
                            category, heading, steps, replit
                        } = item;

                        const problemIndex = problems.findIndex(problem => problem.problem.problem_id == problem_id)

                        if (problemIndex === -1) {

                            problems.push(Problem.storeInitialProblem(problem_id, tags, platform, title, readTime, description, statement, image, replit));

                        } else { 
                             
                            const testCaseExists = problems[problemIndex].problem.testcases.find(testcase => testcase.testCase_id === testCase_id);
                            
                            if (testCaseExists === undefined) {
                                const newTestCase = {
                                    testCase_id,
                                    input,
                                    output,
                                    explanation
                                }

                                problems[problemIndex].problem.testcases.push(newTestCase)
                            }


                            if (!problems[problemIndex].hasOwnProperty('bruteforce') && category === 'bruteforce') { 
                                problems[problemIndex].bruteforce = {
                                    category,
                                    heading,
                                    steps
                                }
                            }

                            if (!problems[problemIndex].hasOwnProperty('efficient') && category === 'efficient') { 
                                problems[problemIndex].efficient = {
                                    category,
                                    heading,
                                    steps,
                                    image
                                }
                            }
                            
                        }
                    }
    
                }
                    
                resolve(problems);

            } catch(err) { 
                reject(err);
            }
        })
    }   

    

    /**
     * Store problem into BD
     */
    public static async insert(data: AlgorithmModel): Promise<void> { 
        return new Promise(async (resolve, reject) => { 
            try { 
                const db = await Database.getConnection();
                
                // Validate 
                const error = Problem.validate(data);
                if (error) {
                    reject(error);
                    return; // Exit early if there's an error
                }
    
                // Start a transaction
                await db.beginTransaction();
    
                try {
                    const [fields] = await db.query<ResultSetHeader>(
                        "INSERT INTO problem (tags, platform, title, readTime, description, statement, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
                        [JSON.stringify(data.problem.tags), data.problem.platform, data.problem.title, data.problem.readTime, data.problem.description, data.problem.statement, data.problem.image]
                    );
    
                    const problemId = fields.insertId; 
                    
                    if (!data.bruteforce || !data.efficient)
                            return;

                    // Execute the second INSERT statement
                    await db.query(
                        "INSERT INTO solution (category, heading, steps, image, problem_id) VALUES (?, ?, ?, null, ?)",
                        [data.bruteforce.category, data.bruteforce.heading, JSON.stringify(data.bruteforce.steps), problemId]
                    );
    
                    // Execute the third INSERT statement
                    await db.query(
                        "INSERT INTO solution (category, heading, steps, image, problem_id) VALUES (?, ?, ?, ?, ?)",
                        [data.efficient.category, data.efficient.heading, JSON.stringify(data.efficient.steps), data.efficient.image, problemId]
                    );
    
                    // Execute the fourth INSERT statement
                    await db.query(
                        "INSERT INTO decode (replit, problem_id) VALUES (?, ?)",
                        [data.code.replit, problemId]
                    );
    
                    // Execute the fifth and sixth INSERT statements for each testcase
                    for (const testcase of data.problem.testcases) {
                        await db.query(
                            "INSERT INTO testcase (input, output, explanation, problem_id) VALUES (?, ?, ?, ?)",
                            [testcase.input, testcase.output, testcase.explanation, problemId]
                        );
                    }
    
                    // Commit the transaction
                    await db.commit();
    
                    // Resolve the Promise if everything is successful
                    resolve();
                } catch (error) {
                    await db.rollback();
                    reject(error);
                }
            } catch(err) { 
                reject(err);
            }
        });
    }
    


    /**
     * Validate problem 
     * @param data
     */
    private static validate(data: AlgorithmModel) { 
        if (!data.problem.tags) return ['Tags is invalid'];
        if (!data.problem.platform) return ['Platform is invalid'];
        if (!data.problem.title) return ['Title is invalid'];
        if (!data.problem.readTime) return ['Readtime is invalid'];
        if (!data.problem.description) return ['Description is invalid'];
        if (!data.problem.image) return ['Problem image is invalid'];

        if (data.bruteforce) {
            if (!data.bruteforce.category) return ['Bruteforce category is invalid'];
            if (!data.bruteforce.heading) return ['Bruteforce heading is invalid'];
            if (!data.bruteforce.steps) return ['Bruteforce steps is invalid'];
        } else
            return ['Bruteforce is invalid'];

        if (data.efficient) {
            if (!data.efficient.category) return ['Efficient category is invalid'];
            if (!data.efficient.heading) return ['Efficient heading is invalid'];
            if (!data.efficient.steps) return ['Efficient steps is invalid'];
            if (!data.efficient.image) return ['Efficient image is invalid'];
        } else
            return ['Bruteforce is invalid'];

        if (!data.code) return ['Code is invalid'];

    } 


    private static storeInitialProblem(problem_id: number, tags: string[], platform: string, title: string, readTime: number, 
                                        description: string, statement: string, image: string | undefined, replit: string): AlgorithmModel { 
          const newProblem:AlgorithmModel = {
                                                problem: { 
                                                    problem_id,
                                                    tags,
                                                    platform,
                                                    title,
                                                    readTime,
                                                    description,
                                                    statement,
                                                    image,
                                                    testcases: []
                                                },
                                                code: {
                                                    replit
                                                }
                                            }
        return newProblem;

    }
}

export default Problem;