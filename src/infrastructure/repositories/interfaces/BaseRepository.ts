import { IRead } from "./IRead";
import { IWrite } from "./IWrite";

export type BaseRepository<T> = IRead<T> & IWrite<T>;
