import { Category } from "./Category"
import { links } from "./links"
import { Link } from "../../../components/Elements" 


export const Categories = ({setShowSideNav}) => {

  return (
    <div>
        {links.map((link, index) => {  
            return (
                <Link key={index} path={link.path}>  
                  <Category
                      setShowSideNav={setShowSideNav}
                      title={link.title}
                      index={index}
                      path={link.path}
                      len={links.length}
                  />
                </Link>
            )
        })}
    </div>
  )
}
