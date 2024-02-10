import { useLocation } from "react-router-dom"
import { setViewedProblems } from "../stores/useProblemStore" 
import { arrays } from "../data"  
import { useEffect } from "react"

export const useViewProblems = () => {
    
    const location = useLocation()

    console.log(location.pathname)

    useEffect(() => {
        switch (location.pathname) {
          case "/category/array":
            setViewedProblems(arrays);
            break;
          default:
            break;
        }
      }, [location.pathname]);

    return [location]
}