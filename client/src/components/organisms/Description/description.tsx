import { DescriptionProp } from "."
import { TestCase } from "../../molecules/TestCase";

export const Description = ({problem}: DescriptionProp) => {
  const {platform, title, readTime, image, statement, testcases} = problem;  

  console.log(testcases)

  return (
    <div className="flex flex-col gap-4">
        <div>
            <h1 className="text-2xl text-slate-blue font-semibold">{`[${platform}] - ${title}`}</h1>
            <div className="flex text-sm text-gray-400 items-center gap-4 mt-2">
                <div className="text-xs">
                    by
                    <span className="text-black ml-2">Harvie</span>
                </div>
                <div className="w-[1px] h-[10px] bg-gray-400"></div>
                <div>
                    June 30, 2023
                </div>
                <div className="w-[1px] h-[10px] bg-gray-400"></div>
                <div>
                    {0} comment
                </div>
                <div className="w-[1px] h-[10px] bg-gray-400"></div>
                <div>
                    {readTime} mins read
                </div>
            </div>
        </div>

        <article>
            {statement}   
        </article>

        <div> 
            {testcases && <TestCase testcase={testcases[0]} />}
        </div>

        <div className="flex flex-col gap-6  items-center justify-center">
            <img 
                src={image} 
                alt=""
                className="max-w-[400px] object-cover"/>
            <small className="text-gray-400">Figure: {title}</small>
        </div>

        <div> 
            {testcases && <TestCase testcase={testcases[1]} />}
        </div>
    </div>
  )
}
