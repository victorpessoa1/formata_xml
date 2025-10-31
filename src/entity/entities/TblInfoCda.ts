import { Column, Entity } from "typeorm";

@Entity("tblInfoCDA", { schema: "dbo" })
export class TblInfoCda {
  @Column("datetime", { name: "Data_Ato", nullable: true })
  dataAto: Date | null;

  @Column("nvarchar", { name: "N_Selo", nullable: true, length: 50 })
  nSelo: string | null;

  @Column("nvarchar", { name: "Tipo_Selo", nullable: true, length: 50 })
  tipoSelo: string | null;

  @Column("nvarchar", { name: "Serie", nullable: true, length: 50 })
  serie: string | null;

  @Column("nvarchar", { name: "Cod_Ato", nullable: true, length: 50 })
  codAto: string | null;

  @Column("nvarchar", { name: "Livro", nullable: true, length: 50 })
  livro: string | null;

  @Column("nvarchar", { name: "Folha", nullable: true, length: 50 })
  folha: string | null;

  @Column("nvarchar", { name: "Termo", nullable: true, length: 50 })
  termo: string | null;

  @Column("nvarchar", { name: "Cod_Nota", nullable: true, length: 50 })
  codNota: string | null;

  @Column("float", { name: "Valor_Emol", nullable: true, precision: 53 })
  valorEmol: number | null;

  @Column("float", { name: "Valor_Transa", nullable: true, precision: 53 })
  valorTransa: number | null;

  @Column("float", { name: "Valor_TJE", nullable: true, precision: 53 })
  valorTje: number | null;

  @Column("float", { name: "Valor_FRC", nullable: true, precision: 53 })
  valorFrc: number | null;

  @Column("datetime", { name: "Data_Emol", nullable: true })
  dataEmol: Date | null;
}
