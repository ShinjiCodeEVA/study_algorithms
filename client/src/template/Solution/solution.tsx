import { Description } from "../../components/organisms/Description"
import { arrays } from "../../data/problems"
import { BruteForce } from "../../components/organisms/Bruteforce"

export const Solution = () => {
  
  const problem = arrays[0];

  return (
    <div className="px-9 py-6">
        <Description problem={problem} />
        {problem.bruteforce && <BruteForce bruteforce={problem.bruteforce} />}        
    </div>
  )
}
