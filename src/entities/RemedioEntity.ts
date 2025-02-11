import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Remedio from "../models/Remedio";
import { Tarja } from "../models/Tarja";

@Entity("remedios")
export class RemedioEntity extends Remedio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column("decimal")
  preco!: number;

  @Column()
  receitaObrigatoria!: boolean;

  @Column({
    type: "enum",
    enum: Tarja,
    default: Tarja.SEM_TARJA,
  })
  tarja!: Tarja;
}
