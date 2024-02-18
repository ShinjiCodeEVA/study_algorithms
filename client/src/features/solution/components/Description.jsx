import { TestCase } from "./TestCase"

export const Description = ({solutionExplanation, image}) => {
  return (
    <div className="mt-4">
        <article>
        {solutionExplanation}
        </article>
        <div className="mt-4">
            <TestCase />
        </div>
        <div className="flex items-center justify-center flex-col">
            <img className="max-h-[300px]" src={image} alt="" />
            <small className="text-gray-400 mt-4">Fig: Maximum product subarray for a sample test case</small>
        </div>
        <div className="mt-4">
            <TestCase />
        </div>
    </div>
  )
}
