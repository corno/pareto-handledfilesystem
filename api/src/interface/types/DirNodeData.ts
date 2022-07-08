
export type DirNodeData = {
    name: string;
    path: string;
    type:
    | ["directory", {}]
    | ["file", {}]
    | ["other", {}]
};