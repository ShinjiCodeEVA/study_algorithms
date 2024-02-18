import { getViewedSolution } from "../api"
import { setViewedSolution } from "../../../stores"

export const useViewedSolution = () => {
    

    const fetchSolution = async (pathSegment) => {
        try {
            const response = await getViewedSolution(pathSegment) 
            setViewedSolution(response)
        } catch(error) {
            console.log(error)
        }
    }

    return [fetchSolution]
}