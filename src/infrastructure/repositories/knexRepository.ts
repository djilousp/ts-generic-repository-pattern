import { BaseRepository } from './interfaces/BaseRepository'
import type { Knex } from 'knex'
export class KnexRepository<T> implements BaseRepository<T> {
  constructor(public readonly knex: Knex, public readonly tableName: string) {}
  get qb(): Knex.QueryBuilder {
    return this.knex(this.tableName)
  }
  find(item: Partial<T>): Promise<T[]> {
    throw new Error('Method not implemented.')
  }
  findOne(id: string | number): Promise<T> {
    return this.qb.where(id).first()
  }
  create(item: T): Promise<T> {
    throw new Error('Method not implemented.')
  }
  update(id: string | number, item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  delete(id: string | number): Promise<boolean> {
    return this.qb.where(id).del()
  }
}
