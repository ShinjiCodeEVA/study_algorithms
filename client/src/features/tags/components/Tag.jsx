import { Button } from "../../../components/Elements"

export const Tag = ({category}) => {
  return (
    <div>
        <Button variant="cloud">
            {category.toUpperCase()}
        </Button>
    </div>
  )
}
