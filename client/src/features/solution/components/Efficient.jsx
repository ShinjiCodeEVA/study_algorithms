import { useParser } from "../../../hooks/useParser"
import { useState, useEffect } from "react"

export const Efficient = ({heading, steps, summary, image}) => {
  
  const [convertToObj] = useParser()
  const [stepsArray, setStepsArray] = useState()
    
  useEffect(() => {
    const res = convertToObj(steps)  
    setStepsArray(res)
  }, [steps]); 


  return (
    <div className="mt-4">
        <h2 className="text-slate-blue text-xl font-semibold">Efficient Solution</h2>
        <article>
            To solve this problem, you can utilize the dynamic programming approach. Here’s a general outline of the solution:
        </article>
        <ul className="mt-3">
            {setStepsArray &&
            stepsArray?.map((step, index) => {
              return <li key={index} className="ml-3 mt-1">
                      {`${index + 1}. ${step}`}
                     </li>
            }) }
        </ul>
        <div className="flex items-center justify-center flex-col">
            <img className="max-h-[300px]" src={image} alt="" />
            <small className="text-gray-400 mt-4">Fig: A dynamic programming approach</small>
        </div>
        <article className="mt-4">
            {summary}
        </article>
    </div>
  )
}
