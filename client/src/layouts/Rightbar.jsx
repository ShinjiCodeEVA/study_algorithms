import { Button } from "../components/Elements"
import { PostList } from "../features/post"
import { InputField } from "../components/Form"
import { TagList } from "../features/tags"
import { HalfTriangle } from "../components/UI"

const Rightbar = () => {
  return (
    <div className="absolute right-0 w-[300px] top-40 px-4">
      <div className="flex border-b-2 border-slate-blue">
        <Button variant="ghost">VIDEOS</Button>
        <HalfTriangle/>
      </div>

      <div className="mt-16 flex border-b-2 border-slate-blue">
        <Button variant="ghost">RECENT POSTS </Button>
        <HalfTriangle/>
      </div>
      
      <div className="mt-7">
        <PostList/>
      </div>

      <div>
        <div className="flex border-b-2 border-slate-blue mt-12">
          <Button variant="ghost">SUBSCRIBE VIA EMAIL</Button>
          <HalfTriangle/>
        </div>
        <p className="my-6">Enter your email address to subscribe to this website and receive notifications of new posts by email.</p>
        <InputField 
          placeholder="Your email address"
        />
        <div className="mt-6">
          <Button variant="subscribe">SIGN UP</Button>
        </div>
      </div>

      <div className="mt-12">
        <div className="mt-16 flex border-b-2 border-slate-blue">
          <Button variant="ghost">TAG CLOUD</Button>
          <HalfTriangle/>
        </div>
        <div className="mt-9">
          <TagList/>
        </div>
      </div>

      <div className="mt-16 flex border-b-2 border-slate-blue">
          <Button variant="ghost">ADVERTISEMENT</Button>
          <HalfTriangle/>
        </div>
    </div>
  )
}

export default Rightbar