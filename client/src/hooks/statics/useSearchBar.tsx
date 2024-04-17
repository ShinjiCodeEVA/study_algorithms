import { problems } from "../../data/problems"
import { useState } from "react"
import { ProblemType } from "../../common/types"
import { useFetchViewedCategories } from "./useFetchViewedCategories"
import { toCamelCase } from "../../util"
import { useEffect } from "react"
import { Categories } from "../../common/enums"
import { SolutionType } from "../../common/types"

const categories = [
    Categories.ARRAYS,
    Categories.LINKED_LIST,
    Categories.STRINGS,
    Categories.TREES,
]

export const useSearchBar = () => { 
    const [searchResult, setSearchResult] = useState<ProblemType[]>();
    const {getCategories, viewedCategories} = useFetchViewedCategories();

    const getResult = (phrase: string): void => { 
        phrase = toCamelCase(phrase);
        
        const isInCategories = categories.find((cat) => cat == phrase);

        if (isInCategories)
            getCategories(phrase);
        else { 
            let resVal: ProblemType[] = [];

            Object.keys(problems)
            .map((key) => (problems as any)[key]) 
            .map((solution) => solution
            .map((p: SolutionType) => {
                const title = toCamelCase(p.problem.title);

               if (title.includes(phrase)) 
                    resVal.push(p.problem);
            }));
          
            if (resVal) {
                const res = resVal?.map((p) => p);
                setSearchResult(res);
            }
                              
        }

       
            
    }

    useEffect(() => {
        if (viewedCategories) {
            const res = viewedCategories?.map((p) => p);
            setSearchResult(res);
        }
    }, [viewedCategories]);

    return {getResult, searchResult}; 
}