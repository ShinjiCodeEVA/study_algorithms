import { useState } from "react"
import { problems } from "../../data/problems"
import { SolutionType } from "../../common/types"
import { toCamelCase } from "../../util"

export const useFetchViewedSolution = () => {
    const [solutionViewed, setSolutionViewed] = useState<SolutionType>();

    const getSolution = (category: string, title: string): void => { 
        category = toCamelCase(category)
        title = title.toLowerCase().trim();   

       const solutionArray = (problems as any)[category];

        if (solutionArray) { 
            const foundSolution = solutionArray.find((solution: SolutionType) => solution.problem?.title.toLowerCase() === title);
            setSolutionViewed(foundSolution)
        }      
        
    }

    return {getSolution, solutionViewed};
}