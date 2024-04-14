import { Problem } from "../problem"
import { ProblemsProp } from "./problem-list.interface"

export const Problems = ({problems, category, ...rest}: ProblemsProp) => {

  return (
    <div className="pt-1 pb-6" {...rest}>        
        <h1 className="text-2xl font-semibold my-4 mx-10 text-center">CATEGORY: 
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
