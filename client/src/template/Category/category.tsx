import { Problems } from "../../components/organisms/Problem/problem-list"
import { arrays } from "../../data/problems"

export const Category = () => {

  return (
    <div>
      <Problems problems={arrays} category={{label: 'arrays'}}/>
    </div>
  )
}