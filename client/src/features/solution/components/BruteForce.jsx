import { useEffect, useState } from "react"
import { useParser } from "../../../hooks/useParser"

export const BruteForce = ({heading, steps, summary}) => {

  const [convertToObj] = useParser()
  const [stepsArray, setStepsArray] = useState()
  
  useEffect(() => {
    const res = convertToObj(steps)
    setStepsArray(res)
  }, [steps]); 


  return (
    <div className="mt-4">
        <h2 className="text-slate-blue text-xl font-semibold ">Brute Force Solution</h2>
        <article className="mt-3">
            {heading}
        </article>
        <ul className="mt-3">
            {setStepsArray &&
            stepsArray?.map((step, index) => {
              return <li key={index} className="ml-3 mt-1">
                      {`${index + 1}. ${step}`}
                     </li>
            }) }
        </ul>
        <article className="mt-4">
            {summary}
        </article>
    </div>
  )
}
