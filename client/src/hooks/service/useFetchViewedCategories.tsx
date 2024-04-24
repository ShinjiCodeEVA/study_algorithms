import { useQuery } from "@tanstack/react-query";
import { fetchViewedCategories } from "../../network/api";
import { useHttpAdapter } from "./useHttpAdapter";
import { ProblemType } from "../../common/types";

export const useFetchViewedCategories = (category: string) => { 
    const http = useHttpAdapter();
    return useQuery({
        queryKey: ["problems", category],  
        queryFn: async () => {
            const data = await fetchViewedCategories(http, category);
            if (data !== null) { 
                return data.data.map((problem: ProblemType) => problem.problem)
            }  
        }
    }); 
}