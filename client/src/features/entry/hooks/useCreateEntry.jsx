import { createSolution } from "../api"

export const useCreateEntry = () => {
    
    const createEntry = async (data) => {
        try {
            const response = await createSolution(data)
            console.log(response)
        } catch(error) {
            console.log(error)
        }
    }

    return [createEntry]
}