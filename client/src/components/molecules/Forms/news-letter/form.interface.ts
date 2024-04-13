import { NewsLetterType } from "../../../../common/types";

export interface FormProp {
    handleSubmit: (formData: NewsLetterType) => void
    [key: string]: unknown;
}