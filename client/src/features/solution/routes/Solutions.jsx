import { Heading } from "../components"
import { Description } from "../components"
import { BruteForce } from "../components" 
import { Efficient } from "../components"
import { Code } from "../components"

const Solutions = () => {
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