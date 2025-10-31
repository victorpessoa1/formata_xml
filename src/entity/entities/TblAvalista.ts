import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblAvalista1", ["idAvalista"], { unique: true })
@Entity("tblAvalista", { schema: "dbo" })
export class TblAvalista {
  @Column("int", { name: "Protocolo_Cartorio", nullable: true })
  protocoloCartorio: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "idAvalista" })
  idAvalista: number;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 100 })
  devedor: string | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 18 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "End_Devedor", nullable: true, length: 100 })
  endDevedor: string | null;

  @Column("nvarchar", { name: "CEP_Devedor", nullable: true, length: 10 })
  cepDevedor: string | null;

  @Column("nvarchar", { name: "Cidade_Devedor", nullable: true, length: 100 })
  cidadeDevedor: string | null;

  @Column("nvarchar", { name: "UF_Devedor", nullable: true, length: 10 })
  ufDevedor: string | null;

  @Column("nvarchar", { name: "Bairro_Devedor", nullable: true, length: 100 })
  bairroDevedor: string | null;

  @Column("nvarchar", { name: "Especie", nullable: true, length: 45 })
  especie: string | null;

  @Column("datetime", { name: "Retorno", nullable: true })
  retorno: Date | null;

  @Column("bit", { name: "Edital", nullable: true })
  edital: boolean | null;

  @Column("bit", { name: "Telegrama", nullable: true })
  telegrama: boolean | null;

  @Column("bit", { name: "Protestado", nullable: true })
  protestado: boolean | null;

  @Column("bit", { name: "Editado", nullable: true })
  editado: boolean | null;

  @Column("bit", { name: "Contraprotesto", nullable: true })
  contraprotesto: boolean | null;

  @Column("bit", { name: "Avalista", nullable: true })
  avalista: boolean | null;

  @Column("bit", { name: "Endossante", nullable: true })
  endossante: boolean | null;

  @Column("bit", { name: "Emitente", nullable: true })
  emitente: boolean | null;

  @Column("int", { name: "N_Edital", nullable: true })
  nEdital: number | null;

  @Column("int", { name: "N_Telegrama", nullable: true })
  nTelegrama: number | null;

  @Column("datetime", { name: "dEdital", nullable: true })
  dEdital: Date | null;

  @Column("bit", { name: "Intimado", nullable: true })
  intimado: boolean | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 11 })
  numTitulo: string | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 10 })
  vencimento: string | null;

  @Column("nvarchar", { name: "Emissao", nullable: true, length: 11 })
  emissao: string | null;

  @Column("bit", { name: "chkDevedor", nullable: true })
  chkDevedor: boolean | null;
}
