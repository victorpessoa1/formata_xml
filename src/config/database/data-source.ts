import "reflect-metadata";
import { DataSource } from "typeorm";
import { TblTitulo } from "../../entity/entities/TblTitulo";
import { TblApontamento } from "../../entity/entities/TblApontamento";
import { CodSegurancaSelo } from "../../entity/entities/CodSegurancaSelo";
import { TblSeloDigital } from "../../entity/entities/TblSeloDigital";

require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "mssql",
  host: process.env.HOST_DATABASE,
  port: parseInt(process.env.PORT_DATABASE),
  username: process.env.USER_DATABASE,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: false,
  logging: false,
  entities: [TblTitulo, TblApontamento, CodSegurancaSelo, TblSeloDigital],
  migrations: [],
  subscribers: [],
  options: {
    trustServerCertificate: true,
    connectTimeout: 600000,
  },
});
