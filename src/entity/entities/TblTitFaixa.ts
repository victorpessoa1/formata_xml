import { Column, Entity } from "typeorm";

@Entity("tblTitFaixa", { schema: "dbo" })
export class TblTitFaixa {
  @Column("int", { name: "Protocolo" })
  protocolo: number;

  @Column("float", { name: "Saldo", precision: 53 })
  saldo: number;

  @Column("datetime", { name: "Data_Apresenta" })
  dataApresenta: Date;

  @Column("nvarchar", { name: "Faixa", nullable: true, length: 50 })
  faixa: string | null;

  @Column("float", { name: "Custas", nullable: true, precision: 53 })
  custas: number | null;

  @Column("nvarchar", { name: "Tipo_Ocorrencia", nullable: true, length: 50 })
  tipoOcorrencia: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 50 })
  devedor: string | null;

  @Column("nvarchar", { name: "Credor", nullable: true, length: 50 })
  credor: string | null;

  @Column("nvarchar", { name: "Data_Ocorrencia", nullable: true, length: 50 })
  dataOcorrencia: string | null;

  @Column("nvarchar", { name: "Forma_Pagamento", nullable: true, length: 50 })
  formaPagamento: string | null;

  @Column("nvarchar", { name: "Doc_Sacador", nullable: true, length: 50 })
  docSacador: string | null;

  @Column("nvarchar", { name: "Doc_Devedor", nullable: true, length: 50 })
  docDevedor: string | null;

  @Column("nvarchar", { name: "Cidade", nullable: true, length: 50 })
  cidade: string | null;

  @Column("nvarchar", { name: "UF", nullable: true, length: 50 })
  uf: string | null;
}
