import { NavLink } from "react-router-dom"

export const Link = ({children, path}) => { 

  return (
    <NavLink to={path} className="hover:text-slate-blue"> 
        {children}
    </NavLink>
  )
}
