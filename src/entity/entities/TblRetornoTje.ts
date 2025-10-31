import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblRetornoTJE", ["idTje"], { unique: true })
@Entity("tblRetornoTJE", { schema: "dbo" })
export class TblRetornoTje {
  @PrimaryGeneratedColumn({ type: "int", name: "idTJE" })
  idTje: number;

  @Column("nvarchar", { name: "Id", length: 50 })
  id: string;

  @Column("nvarchar", { name: "N_Ato", length: 50 })
  nAto: string;

  @Column("nvarchar", { name: "Cod_Ato", length: 50 })
  codAto: string;

  @Column("nvarchar", { name: "Cod_Nota", length: 50 })
  codNota: string;

  @Column("datetime", { name: "Data_Ato" })
  dataAto: Date;

  @Column("nvarchar", { name: "Valor_Emol", length: 50 })
  valorEmol: string;

  @Column("nvarchar", { name: "Valor_TJE", length: 50 })
  valorTje: string;

  @Column("nvarchar", { name: "Valor_Transa", length: 50 })
  valorTransa: string;

  @Column("nvarchar", { name: "N_Proc", length: 50 })
  nProc: string;

  @Column("nvarchar", { name: "Tipo_Selo", length: 50 })
  tipoSelo: string;

  @Column("nvarchar", { name: "Serie", length: 50 })
  serie: string;

  @Column("nvarchar", { name: "N_Selo_Inicio", length: 50 })
  nSeloInicio: string;

  @Column("nvarchar", { name: "N_Selo_Fim", length: 50 })
  nSeloFim: string;

  @Column("nvarchar", { name: "Livro", length: 50 })
  livro: string;

  @Column("nvarchar", { name: "Folha", length: 50 })
  folha: string;

  @Column("nvarchar", { name: "nCodigo", nullable: true, length: 50 })
  nCodigo: string | null;

  @Column("bit", { name: "CPD", nullable: true })
  cpd: boolean | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("nvarchar", { name: "N_Proced", nullable: true, length: 50 })
  nProced: string | null;
}
