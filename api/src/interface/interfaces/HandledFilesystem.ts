import * as pa from "pareto-lang-api"
import * as asyncAPI from "pareto-async-api"

export type DirNodeData = {
    name: string;
    path: string;
    type:
    | ["directory", {}]
    | ["file", {}]
    | ["other", {}]
};

export type File = <T>(
    path: string[],
    callback: (data: string) => asyncAPI.IAsync<T>,
) => asyncAPI.IAsync<T>

export type Directory = <T>(
    path: string[],
    callback: (data: DirNodeData) => null | asyncAPI.IAsync<T>,
) => asyncAPI.IAsync<pa.IReadonlyDictionary<T>>

export type WriteFile = (
    path: string[],
    data: string,
) => void

export type Unlink = (
    path: string[],
) => void

export type WriteFileAndWait = (
    path: string[],
    data: string,
) => asyncAPI.IAsync<null>

export type IHandledFilesystem = {
    file: File
    optionalFile: <T>(
        path: string[],
        callback: (data: string) => asyncAPI.IAsync<T>,
        notExists: () => asyncAPI.IAsync<T>,
    ) => asyncAPI.IAsync<T>
    directory: Directory
    writeFile: WriteFile
    writeFileAndWait: WriteFileAndWait,
    unlink: Unlink,
}
