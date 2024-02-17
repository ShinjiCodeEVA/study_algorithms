import { setViewedProblems } from "../../../stores"
import { getViewedProblems } from "../api"

export const useFetchProblems = () => {

    const fetchProblems = async (category) => {
        try {
            const response = await getViewedProblems(category)
            setViewedProblems(response)
        } catch(error) {
            console.log(error)
        }
    }

    return [fetchProblems]
}