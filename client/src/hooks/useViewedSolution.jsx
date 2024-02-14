import { useLocation } from "react-router-dom"
import { setViewedSolution } from "../stores/useProblemStore" 
import { arrays } from "../data"  
import { useEffect } from "react"

export const useViewedSolution = (id) => {
    
    const location = useLocation()
    const pathSegments = location.pathname.split('/');
    const basePath = `/${pathSegments[1]}/${pathSegments[2]}/`

    useEffect(() => {
        switch (basePath) { 
          case "/category/array/":
            const solution = arrays.find((item) => item.id === parseInt(id.id))
            setViewedSolution(solution)
            break;
          default:
            break;
        }
        
    }, [id]);

    return [location]
}