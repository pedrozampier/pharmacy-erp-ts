import { Repository, DeepPartial, EntityTarget } from "typeorm";
import { AppDataSource } from "../config/data-source";

import { ObjectLiteral } from "typeorm";

export class BaseRepository<T extends ObjectLiteral> {
  protected repo: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    this.repo = AppDataSource.getRepository(entity);
  }

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repo.create(data);
    return await this.repo.save(entity);
  }

  async getAll(): Promise<T[]> {
    return await this.repo.find();
  }

  async getById(id: number): Promise<T | null> {
    return await this.repo.findOne({ where: { id } as any });
  }

  async update(id: number, data: Partial<T>): Promise<T | null> {
    await this.repo.update(id, data);
    return this.getById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return result.affected !== 0;
  }
}
