import { SideBar } from "../../components/organisms/SideBar/sidebar"
import { AppBar } from "../../components/organisms/AppBar"
import { Problems } from "../../components/organisms/Problem/problem-list"
import { arrays } from "../../data/problems"

export const Category = () => {
  return (
    <div>
      <SideBar position="left"/>
      <AppBar/>
      <SideBar position="right"/>
      <Problems problems={arrays} category={{label: 'arrays'}}/> 
    </div>
  )
}
