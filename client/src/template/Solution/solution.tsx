import { Description } from "../../components/organisms/Description"
import { arrays } from "../../data/problems"
import { BruteForce } from "../../components/organisms/Bruteforce"
import { Efficient } from "../../components/organisms/Efficient"
import { Code } from "../../components/organisms/Code"

export const Solution = () => {
  
  const problem = arrays[0];

  return (
    <div className="px-4 lg:px-9 py-6 ">
        <Description problem={problem} />
        {problem.bruteforce && <BruteForce bruteforce={problem.bruteforce} />}   
        {problem.efficient && <Efficient efficient={problem.efficient} />}     
        {problem.code && <Code code={problem.code} />}  
    </div>
  )
}
