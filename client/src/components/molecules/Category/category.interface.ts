

export interface CategoryProp {
    label: string;
    [key: string]: unknown;
    onNavigate: (phrase: string) => void;
}