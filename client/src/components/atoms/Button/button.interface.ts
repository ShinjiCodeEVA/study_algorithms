import { ReactNode } from "react";

export interface ButtonProp {
    children: ReactNode;
    [key: string]: unknown;    
}