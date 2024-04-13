import { ProblemType } from "../../../../common/types";
import { CategoryType } from "../../../../common/types";

export interface ProblemsProp {
    problems: ProblemType[];
    category: CategoryType;
}