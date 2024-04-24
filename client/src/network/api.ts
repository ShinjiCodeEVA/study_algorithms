import { HttpAdapter } from "../common/ports";


export const fetchViewedCategories = async (http:HttpAdapter, category: string) => { 
    try { 
        const response = await http?.get(`/api/problems/${category}`, {});
        return response.data;
    } catch (err: any) {
        throw err.response.data;
    }
}