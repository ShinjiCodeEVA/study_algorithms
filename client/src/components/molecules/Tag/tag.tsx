import { TagProp } from "./tag.interface"
import { Button } from "../../atoms/Button"

export const Tag = ({tag}: TagProp) => {
    
  return (
    <div>
        <Button 
            className={`text-[11px] border-[1px] px-2 py-1 hover:text-white hover:bg-slate-blue`}>
            {tag?.toString().toUpperCase()}
        </Button>
    </div>
  )
}
