import axios from 'axios'

export const getViewedSolution = async (pathSegment) => {
    const response = await axios.get(`http://localhost:3000/api/algorithms/${pathSegment}`)
    return response.data
} 