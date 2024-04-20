

export type ProblemModel = {
    problem_id: number,
    tags: string[],
    platform: string,
    title: string,
    readTime: number,
    description: string,
    statement: string,
    image: string
    testcases: TestCaseModel[]
}

export type SolutionModel = { 
    solution_id: number,
    category: string,
    heading: string,
    steps: string[],
    image?: string | null,
    //problem_id: number
}

export type CodeModel = {
    code_id: number,
    replit: string,
   // solution_id: number
}

export type TestCaseModel = {
    testCase_id: number,
    input: string,
    output: string,
    explanation: string,
    //problem_id: number
}

export type AlgorithmModel = {
    problem: ProblemModel,
    bruteforce: SolutionModel
    efficient: SolutionModel,
    code: CodeModel
}

export type RawAlgorithmModel = { 
    problem_id: number,
    tags: string[],
    platform: string,
    title: string,
    readTime: number,
    description: string,
    statement: string,
    image: string,
    testcase1_id: number,
    testcase1_input: string,
    testcase1_output: string,
    testcase1_explanation: string,
    testcase2_id: number,
    testcase2_input: string,
    testcase2_output: string,
    testcase2_explanation: string,
    bruteforce_id: number,
    bruteforce_heading: string,
    bruteforce_steps: string[],
    bruteforce_image: string | null,
    efficient_id: number,
    efficient_heading: string,
    efficient_steps: string[],
    efficient_image: string | null,
    code_id: number,
    replit_link: string
}