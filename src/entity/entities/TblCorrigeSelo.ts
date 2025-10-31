import { Column, Entity } from "typeorm";

@Entity("tblCorrigeSelo", { schema: "dbo" })
export class TblCorrigeSelo {
  @Column("nvarchar", { name: "CodigoComarca", nullable: true, length: 50 })
  codigoComarca: string | null;

  @Column("nvarchar", { name: "CodigoCartorio", nullable: true, length: 50 })
  codigoCartorio: string | null;

  @Column("nvarchar", { name: "DataTransmissao", nullable: true, length: 50 })
  dataTransmissao: string | null;

  @Column("nvarchar", { name: "HoraTransmissao", nullable: true, length: 50 })
  horaTransmissao: string | null;

  @Column("nvarchar", { name: "MesAnoLote", nullable: true, length: 50 })
  mesAnoLote: string | null;
}
