export interface IWrite<T> {
  create(item: T): Promise<T>;
  update(id: number | string, item: T): Promise<boolean>;
  delete(id: number | string): Promise<boolean>;
}
