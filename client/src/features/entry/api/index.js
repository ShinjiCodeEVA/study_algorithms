import axios from 'axios'

export const createSolution = async (data) => {
    const response = await axios.post('http://localhost:3000/api/algorithms/create', data)
    return response.data 
}  