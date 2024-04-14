import { CodeProp } from "./code.interface"

export const Code = ({code}: CodeProp) => {
  const {replit} = code;

  return (
    <div className="mt-4">
        <h2 className="text-slate-blue text-2xl font-semibold">Code</h2>
        <iframe className="w-full h-[700px] mt-3" src={replit} width="600" height="400"></iframe>
    </div>
  )
}