import { TestCaseProp } from "./test-case.interface"

export const TestCase = ({testcase}: TestCaseProp) => {
  const {input, output, explanation} = testcase;  

  return (
    <div className="bg-slate-white py-4 px-5 text-[.8rem]">
        <div><span className="font-semibold">Input:</span>{input}</div>
        <div><span className="font-semibold">Ouput:</span> {output}</div>
        <div><span className="font-semibold">Explanation:</span> {explanation}</div>
    </div>
  )
}
