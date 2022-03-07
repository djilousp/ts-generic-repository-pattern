export interface IRead<T> {
  find(item: T): Promise<T[]>;
  findOne(id: number | string): Promise<T>;
}
