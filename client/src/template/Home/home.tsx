import { SideBar } from "../../components/organisms/SideBar/sidebar"
import { AppBar } from "../../components/organisms/AppBar"

export const Home = () => {

  return (
    <main className="font-body-font">
      <SideBar position="left"/>
      <AppBar/>
      <SideBar position="right"/>
    </main>
  )
}
