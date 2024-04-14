import { SideBarRightProp } from "."
import { Label } from "../../../atoms/Label";
import { Recent } from "../../../molecules/Recent";
import { RecentPostType } from "../../../../common/types";
import { Form } from "../../../molecules/Forms/news-letter";
import { useState } from "react";
import { NewsLetterType } from "../../../../common/types";
import { Tag } from "../../../molecules/Tag";

const tags = ["backtacking", "bitwise", "divide and conquer", "dynamic programming", "greedy", "hackerrank", "leetcode", "maths", "others"];

export const SidebarRight = (props: SideBarRightProp) => {
  const {recents} = props;

  const [newsLetterEmail, setNewsLetterEmail] = useState<NewsLetterType>();

  const handleSubmit = (formData: NewsLetterType) => {
    setNewsLetterEmail(formData);
  }

  return (
    <div className={`py-16 pr-6 mx-4 desktop:mx-0 w-full desktop:w-[300px] `}>
        <div >
          <Label 
            text="VIDEOS"
          />
        </div>

        <div className="mt-20">
          <Label 
            text="RECENT POSTS"
          />
          <div className="mt-4">
            {recents.map((recent: RecentPostType, index) => { 
              return (
                <Recent 
                  key={index}
                  recent={recent}
                />
              )
            })}
          </div>
        </div>

        <div className="mt-20 flex  gap-4 flex-col">
          <Label 
            text="SUBSCRIBE VIA EMAIL"
          />
          <p>Enter your email address to subscribe to this website and receive notifications of new posts by email.</p>
          <Form handleSubmit={handleSubmit}/>
        </div>

        <div className="mt-20">
          <Label 
            text="TAG CLOUD"
          />
          <div className="mt-7 flex gap-2 flex-wrap">
            {tags.map((tag) => { 
              return (
                <Tag key={tag} tag={tag} />
              )
            })}
          </div>
        </div>
    </div>
  )
}
