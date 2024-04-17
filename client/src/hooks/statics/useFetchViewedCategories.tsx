import { ProblemType } from "../../common/types"
import { useState } from "react";
import { problems } from "../../data/problems";
import { toCamelCase } from "../../util";

export const useFetchViewedCategories = () => { 
    const [viewedCategories, setViewedCategories] = useState<ProblemType[]>();

    const getCategories = (category: string): void =>  { 
        category = toCamelCase(category);

        const problemsViewed = (problems as any)[category]; 

        if (problemsViewed) { 
            const foundProblems = problemsViewed.map((p: ProblemType) => p.problem);
            setViewedCategories(foundProblems)
        }
    }

    return {getCategories, viewedCategories};
}