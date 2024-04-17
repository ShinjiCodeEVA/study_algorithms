import { Category } from "../../template/Category"
import { useEffect } from "react"
import image from '../../../public/logo.png'

export const CategoryPage = () => {

  useEffect(() => { 
    const favicon = document.getElementById('favicon'); 
    
    console.log(favicon)
  }, [])

  return (
    <div>
        <Category />
    </div>
  )
}
