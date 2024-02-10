import { Tag } from "./Tag"

export const TagList = () => {
  return (
    <div className="flex flex-wrap gap-2">
        <Tag category="backtracking"/>
        <Tag category="bitwise"/>
        <Tag category="divide and conquer"/>
        <Tag category="greedy"/>
        <Tag category="leetcode"/>
        <Tag category="hackerank"/>
    </div>
  )
}
