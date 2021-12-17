declare module "os" {
  import { Seek, Error } from "std";

  type Success = 0;
  type OSOperationResult = Success | Error;
  type OSOperationTuple = [str: string, error: Error];
  type Callback = () => any;
  type TimeoutHandle = number;

  export interface File {
    close(): number;
    puts(str: string): void;
    printf(fmt: string, ...args: any[]): void;
    flush(): void;
    seek(offset: number, whence: Seek): number;
    tell(): number;
    tello(): BigInt;
    eof(): boolean | unknown;
    fileno(): unknown;
    error(): Error | unknown;
    clearerr(): void;
    read(buffer: ArrayBuffer, position: number, length: number): void;
    write(buffer: ArrayBuffer, position: number, length: number): void;
    getline(): string;
    readAsString(max_size?: number): string;
    getByte(): number;
    putByte(c: number): void;
  }

  export interface FileStatus {
    readonly dev: number;
    readonly ino: number;
    readonly mode: number;
    readonly nlink: number;
    readonly uid: number;
    readonly gid: number;
    readonly rdev: number;
    readonly size: number;
    readonly blocks: number;
    readonly atime: number;
    readonly mtime: number;
    readonly ctime: number;
  }

  export interface ExecOptions {
    block?: boolean;
    usePath?: boolean;
    file?: string;
    cwd?: string;
    stdin?: File;
    stdout?: File;
    stderr?: File;
    env?: { readonly [key: string]: string };
    uid?: number;
    git?: number;
  }

  export class Worker {
    static parent: Worker;
    constructor(filename: string);
    postMessage(msg: any): void;
    onmessage: (data: any) => void;
  }

  export const SIGINT: number;
  export const SIGABRT: number;
  export const SIGFPE: number;
  export const SIGILL: number;
  export const SIGSEGV: number;
  export const SIGTERM: number;

  export const WNOHANG: number;

  export const platform: string;

  export function open(filename: string): File | -1;
  export function close(file: File): void;
  export function seek(file: File, offset: number, whence: Seek): number;
  export function seek(
    file: File,
    offset: BigInt,
    whence: Seek
  ): BigInt;
  export function read(
    file: File,
    buffer: ArrayBuffer,
    offset: number,
    length: number
  ): number;
  export function write(
    file: File,
    buffer: ArrayBuffer,
    offset: number,
    length: number
  ): number;
  export function isatty(file: File): boolean;
  export function ttyGetWinSize(
    file: File
  ): [width: number, height: number] | null;
  export function ttySetRaw(file: File): void;
  export function remove(filename: string): OSOperationResult;
  export function rename(oldname: string, newname: string): OSOperationResult;
  export function realpath(path: string): OSOperationTuple;
  export function getcwd(): OSOperationTuple;
  export function chdir(path: string): OSOperationResult;
  export function mkdir(path: string, mode?: string): OSOperationResult;
  export function stat(path: string): [status: FileStatus, error: Error];
  export function lstat(path: string): [status: FileStatus, error: Error];
  export function utimes(
    path: string,
    atime: number,
    mtime: number
  ): OSOperationResult;
  export function symlink(target: string, linkpath: string): OSOperationResult;
  export function readlink(path: string): OSOperationTuple;
  export function readdir(path: string): [files: string[], error: Error];
  export function setReadHandle(file: File, cb: Callback | null): void;
  export function setReadHandle(file: File, cb: null): void;
  export function setWriteHandle(file: File, cb: Callback): void;
  export function setWriteHandle(file: File, cb: null): void;
  export function signal(signal: number, cb: Callback): void;
  export function signal(signal: number, cb: null): void;
  export function signal(signal: number, cb: undefined): void;
  export function kill(pid: number, signal: number): void;
  export function exec(args: string[], options?: ExecOptions): void;
  export function waitpid(
    pid: number,
    options: number
  ): [ret: unknown | Error, status: any];
  export function dup(file: File): void;
  export function dup2(oldFile: File, newFile: File): void;
  export function pipe(): [readFile: File, writeFile: File] | null;
  export function sleep(delay: number): void;
  export function setTimeout(cb: Callback, delay: number): TimeoutHandle;
  export function clearTimeout(handle: TimeoutHandle): void;
}
