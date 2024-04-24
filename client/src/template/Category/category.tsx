import { Problems } from "../../components/organisms/Problem/problem-list"
import { useFetchViewedCategories } from "../../hooks/service/useFetchViewedCategories"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export const Category = () => {

  const {name} = useParams();
  const {data, error, isLoading, refetch} = useFetchViewedCategories(name || '');

  useEffect(() => {
    if (name) 
       refetch();
  }, [name])

  return (
    <div>
      {data ? 
       <Problems 
       problems={data} 
       category={{label: name || "loading"}}
       className="px-4 desktop:px-9 "/> : ""}
       {isLoading &&
       <div className="flex items-center justify-center w-full h-screen">Loading....</div>}
       {error &&
       <div className="flex items-center justify-center w-full h-screen">{error.message}</div>}
    </div>
  )
}
