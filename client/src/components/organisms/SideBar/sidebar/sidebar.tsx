import { SidebarProp } from "./sidebar.interface"
import { SideBarLeft } from "../sidebar-left"
import { SidebarRight } from "../sidebar-right"
import { CategoryType } from "../../../../common/types"
import { RecentPostType } from "../../../../common/types"

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

const recentPosts: RecentPostType[] = [
  {platform: "LeetCode", name: "Maximum Product Subarray Solution", date: new Date()},
  {platform: "LeetCode", name: "Maximum Product Subarray Solution", date: new Date()},
  {platform: "LeetCode", name: "Maximum Product Subarray Solution", date: new Date()},
  {platform: "LeetCode", name: "Maximum Product Subarray Solution", date: new Date()},
  {platform: "LeetCode", name: "Maximum Product Subarray Solution", date: new Date()}
]

export const SideBar = ({position}: SidebarProp) => {
  
  return (<>
    {position === "left" ?
      <SideBarLeft categories={categories}/> :
      <SidebarRight recents={recentPosts} />}
  </>)
}
