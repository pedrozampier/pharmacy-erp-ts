import { BaseRepository } from "./BaseRepository";
import { RemedioEntity } from "../entities/RemedioEntity";

export class RemedioRepository extends BaseRepository<RemedioEntity> {
  constructor() {
    super(RemedioEntity);
  }
}
