import { Problem } from "../components"
import { useProblemStore } from "../../../stores"  
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { useFetchProblems } from "../hooks"

export const Problems = () => {

  const viewedProblems  = useProblemStore(state => state.viewedProblems)
  const [fetchProblems] = useFetchProblems()
  const location = useLocation()

  

  useEffect(() => {
    fetchProblems(location?.pathname.split('/')[2])
  }, [])

  

  return (
    <div className="px-9 mt-6">  
        <h1 className="text-center text-2xl font-semibold">
            CATEGORY: 
            <span className="text-slate-blue"> ARRAYS</span>
        </h1>
        <p className="mt-8 text-base font-semibold text-slate-blue">Read more</p>
        <div className="mt-8">
            {viewedProblems &&
            viewedProblems.map((problem, index) => {
              return (
                <Problem
                  key={index}
                  id={problem.id}
                  index={index}
                  tags={problem.tags[0]}
                  title={problem.title}
                  readTime={problem.readTime}
                  description={problem.description}
                />
              )
            }) }
            
        </div>
    </div>
  )
}
