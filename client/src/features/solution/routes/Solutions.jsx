import { useEffect } from "react"
import { Heading } from "../components"
import { Description } from "../components"
import { BruteForce } from "../components" 
import { Efficient } from "../components"
import { Code } from "../components"
import { useParams } from "react-router-dom"
import { useProblemStore } from "../../../stores/useProblemStore"
import { useViewedSolution } from "../hooks/useViewedSolution"


// todo: pass all the required fields to the components of solution
export const Solutions = () => {

  const { categoryName, id } = useParams()
  
  const [fetchSolution] = useViewedSolution()
  const viewedSolution = useProblemStore(state => state.viewedSolution)

  useEffect(() => {
    fetchSolution(`/${categoryName}/${id}`)
  }, [])

  return (
    <div className="px-9 mt-4">
      { viewedSolution && <>
      <div>
        <Heading 
          title={viewedSolution[0]?.title}
          platform={viewedSolution[0]?.platform}
          readTime={viewedSolution[0]?.readTime}
          />
      </div>

      <div>
        <Description
          solutionExplanation={viewedSolution[0]?.solutionExplanation}
          image={viewedSolution[0]?.bImage}/>
      </div>

      <div>
        <BruteForce 
          heading={viewedSolution[0]?.bHeading}
          steps={viewedSolution[0]?.bSteps}
          summary={viewedSolution[0]?.bSummary}
          />
      </div>

      <div>
        <Efficient
          heading={viewedSolution[0]?.eHeading}
          steps={viewedSolution[0]?.eSteps}
          summary={viewedSolution[0]?.eSummary}
          image={viewedSolution[0]?.eImage}/>
      </div>

      <div>
        <Code
          replit={viewedSolution[0]?.replit}/>
      </div> </>}
    </div>
  )
}
