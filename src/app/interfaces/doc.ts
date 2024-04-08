export interface Doc {
    id?: string;
    label?: string;
    component?: any;
    doc?: Doc[];
    children?: Doc[];
    description?: string
}
