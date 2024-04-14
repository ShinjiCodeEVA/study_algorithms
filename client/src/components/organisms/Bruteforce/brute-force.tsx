import { BruteForceProp } from "./brute-force.interface"

export const BruteForce = ({bruteforce}: BruteForceProp) => {
  const {heading, steps, complexity} = bruteforce;

  return (
    <div className="mt-4 flex flex-col gap-6">  
        <h2 className="text-slate-blue font-semibold text-lg">Brute Force Solution</h2>
        <p>{heading}</p>
        <ul>
            {steps.map((step, index) => { 
                return <li 
                         key={index}
                         className="mt-2 indent ml-8">
                         {index + 1 +". "}
                         <span>{step}</span>
                       </li>
            })}
        </ul>
        <p>{complexity}</p>
    </div>
  )
}
