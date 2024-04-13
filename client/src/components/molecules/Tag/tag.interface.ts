import { ReactNode } from "react";

export interface TagProp {
    tag: ReactNode;
    [key: string]: unknown;
}