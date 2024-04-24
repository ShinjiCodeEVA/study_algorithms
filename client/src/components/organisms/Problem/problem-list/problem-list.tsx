import { Problem } from "../problem"
import { ProblemsProp } from "./problem-list.interface"

export const Problems = ({problems, category, ...rest}: ProblemsProp) => {

  return (
    <div className="pt-1 pb-6" {...rest}>        
        <h1 className="text-2xl font-semibold my-4 mx-10 text-center"> { category.label.split(" ")[0] === 'SEARCH'  ? 'SEARCH RESULTS FOR:' : 'CATEGORY:'} 
            <span className="text-slate-blue">{category.label.split(" ")[1] &&
                                                 category.label.split(" ")[1] !== 'list' && 
                                                 category.label.split(" ")[1] !== (undefined || null) ? category.label.substring(category.label.indexOf(category.label.split(" ")[1])).toUpperCase() : category.label.toUpperCase()}</span> 
        </h1>
        <div className="flex flex-col gap-10">
            {problems && problems.map((problem, index) => { 
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
