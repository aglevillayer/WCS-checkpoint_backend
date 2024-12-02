import { DataSource } from "typeorm";
import { Country } from "../entities/Country";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "../db/database.sqlite", // Pour l'exercice mis en dur, en pratique mis dans un fichier .env qui est rajouté au .gitignore
  entities: ["src/entities/*.ts"],
  synchronize: true,
  logging: "all",
});

export async function cleanDB() {
  await dataSource.manager.clear(Country);
}
