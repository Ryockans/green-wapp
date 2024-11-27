export type StateFunction<T extends any[] = any[]> = (...args: T) => void;

export type AsyncStateFunction<T extends any[] = any[]> = (...args: T) => Promise<boolean>;

export type AnyRecord = { [K in string]: any };

export type Nullable<T> = T | null;