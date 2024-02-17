import axios from 'axios'

export const getViewedProblems = async (category) => {
    const response = await axios.get(`http://localhost:3000/api/algorithms?category=${category}`)
    return response.data
}