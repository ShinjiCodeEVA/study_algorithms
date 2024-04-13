import { LabelProp } from "./label.interface"

export const Label = ({text}: LabelProp) => {
  return (
    <div className={`text-sm flex items-end`}>
        <div className=" bg-slate-blue text-white  px-3 py-2 text-nowrap">{text}</div>
        <div className="w-full border-slate-blue border-b-2"></div>
    </div>
  )
}
