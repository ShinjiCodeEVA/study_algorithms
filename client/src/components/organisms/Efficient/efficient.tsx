import { EfficientProp } from "."


export const Efficient = ({efficient}: EfficientProp) => {
  const {heading, image, steps, complexity} = efficient;
    
  return (
    <div className="mt-4 flex flex-col gap-6">  
        <h2 className="text-slate-blue font-semibold text-lg">Efficient Solution</h2>
        <p>{heading}</p>
        <ul>
            {steps.map((step, index) => { 
                return <li 
                         key={index}
                         className="mt-2 indent ml-8">
                         {index + 1 +". "}
                         <span>{step}</span>
                       </li>
            })}
        </ul>
        <div className="flex flex-col items-center justify-center gap-6">
            <img 
                src={image} 
                alt=""
                className="max-w-[800px] w-full" />
            <small className="text-gray-400">Figure: Maximum Product Subarray Solution</small>
        </div>
        <p>{complexity}</p>
    </div>
  )
}
