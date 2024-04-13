import { RecentPostProp } from "./recent.interface"

export const Recent = ({recent}: RecentPostProp) => {
  const {platform, name, date} = recent;

  
  return (
    <div className="border-b-[1px] py-3">
        <p className="text-sm font-semibold">
            [{platform}] - {name}
        </p>
        <small className="text-dark-gray">
            {date.toDateString()}
        </small>
    </div>
  )
}
