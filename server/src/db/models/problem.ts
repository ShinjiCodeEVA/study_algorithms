import Database from "../index.js";
import { AlgorithmModel, RawAlgorithmModel, ProblemModel, TestCaseModel, SolutionModel, CodeModel} from "../../types/models.js";

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

                          
    public static async getAll(): Promise<AlgorithmModel[]>  {
        return new Promise(async (resolve, reject) => { 
            
            try { 
                const db = Database.getInstance();

                const res: RawAlgorithmModel[] = await db.query<RawAlgorithmModel[]>(Problem.defaultQuery, []);
                const problems: AlgorithmModel[] = []

                for (const item of res) {

                    if (item) {

                        const {problem_id, tags, platform, title, readTime, description, statement, image,
                            testcase1_id, testcase1_input, testcase1_output, testcase1_explanation,
                            testcase2_id, testcase2_input, testcase2_output, testcase2_explanation,
                            bruteforce_id, bruteforce_heading, bruteforce_steps, 
                            efficient_id, efficient_heading, efficient_steps, efficient_image,
                            code_id, replit_link
                        } = item || {}
                     

                        const testcases: any = [
                            {testCase_id: testcase1_id, input: testcase1_input, output: testcase1_output, explanation: testcase1_explanation},
                            {testCase_id: testcase2_id, input: testcase2_input, output: testcase2_output, explanation: testcase2_explanation}
                        ]
                        
    
                        const problem: ProblemModel = {
                            problem_id: problem_id,
                            tags,
                            readTime,
                            platform,
                            title,
                            description,
                            statement,
                            image,
                            testcases
                        }          
                        
                        const bruteforce: SolutionModel = {
                            solution_id: bruteforce_id,
                            category: 'bruteforce',
                            heading: bruteforce_heading,
                            steps: bruteforce_steps,
                            image: null,
                        }
    
                        const efficient: SolutionModel = {
                            solution_id: efficient_id,
                            category: 'efficient',
                            heading: efficient_heading,
                            steps: efficient_steps,
                            image: efficient_image
                        }
    
                        const code: CodeModel = {
                            code_id,
                            replit: replit_link
                        }
                       
                        const algorithm:AlgorithmModel = { problem, bruteforce, efficient, code }
                        problems.push(algorithm);
                    }
    
                }
                    
                resolve(problems);

            } catch(err) { 
                reject(err);
            }
        })
    }
}

export default Problem;