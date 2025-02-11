import "reflect-metadata";
import { DataSource } from "typeorm";
import { RemedioEntity } from "../entities/RemedioEntity";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql", 
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [RemedioEntity],
  synchronize: true, 
  logging: true,
});
