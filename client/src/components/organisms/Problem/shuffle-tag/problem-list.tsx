import { Problem } from "../problem"
import { ProblemsProp } from "../problem-list"

export const Problems = ({problems, category, ...rest}: ProblemsProp) => {

  return (
    <div className="pt-1 pb-6" {...rest}>        
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
