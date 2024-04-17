import { SidebarProp } from "./sidebar.interface"
import { SideBarLeft } from "../sidebar-left"
import { SidebarRight } from "../sidebar-right"
import { CategoryType, SolutionType } from "../../../../common/types"
import { RecentPostType } from "../../../../common/types"
import { problems } from "../../../../data/problems"

const categories: CategoryType[]  = [
  {label: "home", index: 0},
  {label: "arrays", index: 1},
  {label: "linked list", index: 2},
  {label: "strings", index: 3},
  {label: "trees", index: 4},
  {label: "theory", index: 5},
  {label: "misc", index: 6},
  {label: "feedback", index: 7},
  {label: "site map", index: 8},  
]

const recentPosts: RecentPostType[] = []

const populateRecent = (): void => { 
  Object.keys(problems)
                .map((key) => (problems as any)[key])
                .map((solution) => solution
                .map((problem: SolutionType) => {
                  const p = problem.problem;
                  const post = {platform: p.platform, name: p.title, date: new Date()}
                
                  recentPosts.push(post);
                }))
              
}

populateRecent();

export const SideBar = ({position, isSideBarVisible, ...rest}: SidebarProp) => {
  
  return (<>
    <div {...rest} >
      {position === "left" ?
        <SideBarLeft isSideBarVisible={isSideBarVisible} categories={categories}  /> :
        <SidebarRight recents={recentPosts}  />}
    </div>
  </>)
}
