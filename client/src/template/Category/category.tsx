import { Problems } from "../../components/organisms/Problem/problem-list"
import { useFetchViewedCategories } from "../../hooks/statics/useFetchViewedCategories"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export const Category = () => {

  const {getCategories, viewedCategories} = useFetchViewedCategories();
  const {name} = useParams();

  useEffect(() => {
    if (name) 
      getCategories(name)
  }, [name])

  return (
    <div>
      {viewedCategories ? 
       <Problems 
       problems={viewedCategories} 
       category={{label: name || "loading"}}
       className="px-4 desktop:px-9 "/> : "Loading"}
    </div>
  )
}
