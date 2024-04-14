import { CodeProp } from "./code.interface";
import { forwardRef } from "react";

export const Code = forwardRef<HTMLDivElement, CodeProp>(({ code }, ref) => {
  const { replit } = code;

  return (
    <div className="mt-4" ref={ref}>
      <h2 className="text-slate-blue text-2xl font-semibold">Code</h2>
      <iframe
        className="w-full h-[700px] mt-3"
        src={replit}
        width="600"
        height="400"
      ></iframe>
    </div>
  );
});

