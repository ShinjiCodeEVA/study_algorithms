import { Description } from "../../components/organisms/Description"
import { arrays } from "../../data/problems"
import { BruteForce } from "../../components/organisms/Bruteforce"
import { Efficient } from "../../components/organisms/Efficient"
import { Code } from "../../components/organisms/Code"
import { Button } from "../../components/atoms/Button"
import { useRef } from "react"

export const Solution = () => {
  
  const problem = arrays[0];
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => { 
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="px-4 lg:px-9 py-6 ">
        <Description problem={problem} />
        <Button 
            onClick={handleScroll}
            className="text-sm text-slate-blue mt-4">
            See code below
        </Button>
        {problem.bruteforce && <BruteForce bruteforce={problem.bruteforce} />}   
        {problem.efficient && <Efficient efficient={problem.efficient} />}     
        {problem.code && <Code ref={ref} code={problem.code} />}  
    </div>
  )
}
