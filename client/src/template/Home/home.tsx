import { Description } from "../../components/organisms/Description"
import { problems } from "../../data/problems"
import { BruteForce } from "../../components/organisms/Bruteforce"
import { Efficient } from "../../components/organisms/Efficient"
import { Code } from "../../components/organisms/Code"
import { Problems } from "../../components/organisms/Problem/shuffle-tag"

export const Home = () => {
  
  const problem = problems.arrays[0];
  const p = problems.arrays.map((arr) => arr.problem)

  return (
    <div className="px-4 lg:px-9 py-6 ">
        {problem.problem && <Description parent="home" problem={problem?.problem}  />} 
        {problem.bruteforce && <BruteForce bruteforce={problem.bruteforce} />}   
        {problem.efficient && <Efficient efficient={problem.efficient} />}     
        {problem.code && <Code code={problem.code} />}  
        <Problems 
          problems={p} 
          category={{label: "shuffle"}}
          className="mt-10"
          />
    </div>
  )
}
