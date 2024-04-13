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

export type ProblemType = {
    tags: string[];
    platform: string;
    title: string;
    readTime: number;
    description: string; 
}