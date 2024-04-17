import { Description } from "../../components/organisms/Description"
import { BruteForce } from "../../components/organisms/Bruteforce"
import { Efficient } from "../../components/organisms/Efficient"
import { Code } from "../../components/organisms/Code"
import { Button } from "../../components/atoms/Button"
import { useRef } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useFetchViewedSolution } from "../../hooks/statics"

export const Solution = () => {
  
  const ref = useRef<HTMLDivElement>(null);
  const {getSolution, solutionViewed} = useFetchViewedSolution();
  const {categoryName, title} = useParams();

  const handleScroll = () => { 
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  useEffect(() => { 
    if (categoryName && title)
      getSolution(categoryName, title);
  }, [])

  
  return (
    <div className="px-4 lg:px-9 py-6 ">
        {solutionViewed && <>
        <Description problem={solutionViewed.problem} />
        <Button 
            onClick={handleScroll}
            className="text-sm text-slate-blue mt-4">
            See code below
        </Button>
        <BruteForce bruteforce={solutionViewed.bruteforce} />  
        <Efficient efficient={solutionViewed.efficient} />    
        <Code ref={ref} code={solutionViewed.code} /> </>}
    </div>
  )
}
