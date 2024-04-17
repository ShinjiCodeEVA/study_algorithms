import { Problems } from "../../components/organisms/Problem/problem-list"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useSearchBar } from "../../hooks/statics/useSearchBar"

export const SearchResult = () => {

  const {title} = useParams();
  const {getResult, searchResult} = useSearchBar(); 

  useEffect(() => {
    if (title) 
        getResult(title)
  }, [title])

  console.log(searchResult);

  return (
    <div>
      {searchResult ? 
       <Problems 
       problems={searchResult} 
       category={{label: `SEARCH ${title}` || "loading"}}
       className="px-4 desktop:px-9 "/> : "Loading"}
    </div>
  )
}
