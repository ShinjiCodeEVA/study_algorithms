export type CategoryType = {
    label: string;
    index?: number;
}

export type RecentPostType = {
    platform: string;
    name: string;
    date: Date;
}

export type NewsLetterType = {
    email: string;
} 

export type TestCaseType = {
    input: string;
    output: string;
    explanation: string;
}

export type ProblemType = {
    tags: string[];
    platform: string;
    title: string;
    readTime: number;
    description: string; 
    statement?: string;
    image?:string;
    testcases?: TestCaseType[];
    [key: string]: unknown;
   
}

export type BaseSolutionType = {
    heading: string;
    image?: string;
    steps: string[]
    complexity: string;
}

export type CodeType = {
    replit: string;
}

export type SolutionType = {
    problem: ProblemType;
    bruteforce: BaseSolutionType;
    efficient: BaseSolutionType;
    code: CodeType;
}
