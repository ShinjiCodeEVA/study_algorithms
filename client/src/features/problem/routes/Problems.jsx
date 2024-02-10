import { Problem } from "../components"
import { useViewProblems } from "../../../hooks/useViewProblems"
import { useProblemStore } from "../../../stores/useProblemStore" 


export const Problems = () => {

  const [ location ] = useViewProblems()
  const  viewedProblems  = useProblemStore(state => state.viewedProblems)

  console.log(viewedProblems)

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
