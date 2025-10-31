import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblTeste", ["idTje"], { unique: true })
@Entity("tblRel_TJE", { schema: "dbo" })
export class TblRelTje {
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

  @Column("float", { name: "Valor_Emol", precision: 53 })
  valorEmol: number;

  @Column("float", { name: "Valor_TJE", precision: 53 })
  valorTje: number;

  @Column("float", { name: "Valor_Transa", precision: 53 })
  valorTransa: number;

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

  @Column("float", { name: "SeloGeral", nullable: true, precision: 53 })
  seloGeral: number | null;

  @Column("float", { name: "SeloCertidao", nullable: true, precision: 53 })
  seloCertidao: number | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("int", { name: "Id_Devedor", nullable: true })
  idDevedor: number | null;
}
