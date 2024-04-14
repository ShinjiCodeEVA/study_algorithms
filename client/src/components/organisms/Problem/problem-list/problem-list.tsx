import { Problem } from "../problem"
import { ProblemsProp } from "./problem-list.interface"

export const Problems = ({problems, category}: ProblemsProp) => {

  return (
    <div className="px-4 desktop:px-9 py-6">        
        <h1 className="text-2xl font-semibold m-10 text-center">CATEGORY: 
            <span className="text-slate-blue">{category?.label.toUpperCase()}</span> 
        </h1>
        <div className="flex flex-col gap-10">
            {problems.map((problem, index) => { 
                return(
                    <Problem 
                        key={index}
                        index={index}
                        problem={problem}
                    />
                ) 
            })}
        </div>  
    </div>
  )
}
