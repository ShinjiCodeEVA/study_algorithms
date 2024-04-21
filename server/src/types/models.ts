

export type ProblemModel = {
    problem_id: number,
    tags: string[],
    platform: string,
    title: string,
    readTime: number,
    description: string,
    statement: string,
    image?: string | undefined,
    testcases: TestCaseModel[]
}

export type SolutionModel = { 
    solution_id?: number,
    category: string,
    heading: string,
    steps: string[],
    image?: string | null,
    //problem_id: number
}

export type CodeModel = {
    code_id?: number,
    replit: string,
   // solution_id: number
}

export type TestCaseModel = {
    testCase_id?: number,
    input: string,
    output: string,
    explanation: string,
    problem_id?: number
}

export type AlgorithmModel = {
    problem: ProblemModel,
    bruteforce?: SolutionModel
    efficient?: SolutionModel,
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
    image?: string,
    testCase_id: number,
    input: string,
    output: string,
    explanation: string,
    category: string,
    heading: string,
    steps: string[],
    replit: string
}

export type SQLUpdateResult = {
    rows: any[]
    insertId: bigint,
    affectedRows: number,
    warningStatus: number,
    fieldCount: number, 
    info: any, 
    serverStatus: number, 
    changedRows: number
};