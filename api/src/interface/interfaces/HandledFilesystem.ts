import * as pa from "pareto-api-core"
import { DirNodeData } from "../types/DirNodeData"


export type File = <T>(
    path: string[],
    callback: (data: string) => pa.IAsync<T>,
) => pa.IAsync<T>

export type Directory = <T>(
    path: string[],
    callback: (data: DirNodeData) => null | pa.IAsync<T>,
) => pa.IAsync<pa.IReadonlyDictionary<T>>

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
) => pa.IAsync<null>

export type IHandledFilesystem = {
    file: File
    optionalFile: <T>(
        path: string[],
        callback: (data: string) => pa.IAsync<T>,
        notExists: () => pa.IAsync<T>,
    ) => pa.IAsync<T>
    directory: Directory
    writeFile: WriteFile
    writeFileAndWait: WriteFileAndWait,
    unlink: Unlink,
}
