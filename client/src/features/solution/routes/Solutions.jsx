import { useEffect } from "react"
import { Heading } from "../components"
import { Description } from "../components"
import { BruteForce } from "../components" 
import { Efficient } from "../components"
import { Code } from "../components"
import { useParams } from "react-router-dom"
import { useViewedSolution } from "../../../hooks/useViewedSolution"
import { useProblemStore } from "../../../stores/useProblemStore"


// todo: pass all the required fields to the components of solution
const Solutions = () => {

  const id = useParams()

  const [location] = useViewedSolution(id)
  const viewedSolution = useProblemStore(state => state.viewedSolution)

  return (
    <div className="px-9 mt-4">
      <div>
        <Heading/>
      </div>

      <div>
        <Description/>
      </div>

      <div>
        <BruteForce />
      </div>

      <div>
        <Efficient/>
      </div>

      <div>
        <Code/>
      </div>
    </div>
  )
}

export default Solutions