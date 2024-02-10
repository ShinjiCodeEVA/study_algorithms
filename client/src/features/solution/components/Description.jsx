import { TestCase } from "./TestCase"

export const Description = () => {
  return (
    <div className="mt-4">
        <article>
        In the given problem statement, we have an array of integers and we need to find the maximum product possible for a contiguous subarray.<br/><br/>The most important part of this problem is that the elements have to be contiguous. So special attention needs to be given for negative numbers and zeroes.
        </article>
        <div className="mt-4">
            <TestCase />
        </div>
        <div className="flex items-center justify-center flex-col">
            <img className="max-h-[300px]" src="https://i0.wp.com/studyalgorithms.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-30-at-6.26.38-PM.png?resize=585%2C494&ssl=1" alt="" />
            <small className="text-gray-400 mt-4">Fig: Maximum product subarray for a sample test case</small>
        </div>
        <div className="mt-4">
            <TestCase />
        </div>
    </div>
  )
}
