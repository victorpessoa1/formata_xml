import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDevolucao", ["id"], { unique: true })
@Entity("tblDevolucao", { schema: "dbo" })
export class TblDevolucao {
  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 50 })
  devedor: string | null;

  @Column("nvarchar", { name: "Especie", nullable: true, length: 50 })
  especie: string | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 50 })
  portador: string | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 50 })
  numTitulo: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 50 })
  sacador: string | null;

  @Column("datetime", { name: "Data_Entrada", nullable: true })
  dataEntrada: Date | null;

  @Column("nvarchar", { name: "Irregularidade", nullable: true, length: 100 })
  irregularidade: string | null;

  @Column("nvarchar", { name: "Origem", nullable: true, length: 50 })
  origem: string | null;

  @Column("nvarchar", { name: "Ag_CodCedente", nullable: true, length: 50 })
  agCodCedente: string | null;

  @Column("nvarchar", { name: "Doc_Sacador", nullable: true, length: 50 })
  docSacador: string | null;

  @Column("nvarchar", { name: "Cedente", nullable: true, length: 50 })
  cedente: string | null;

  @Column("nvarchar", { name: "Representante", nullable: true, length: 50 })
  representante: string | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 50 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "End_Devedor", nullable: true, length: 50 })
  endDevedor: string | null;

  @Column("nvarchar", { name: "Bairro_Devedor", nullable: true, length: 50 })
  bairroDevedor: string | null;

  @Column("nvarchar", { name: "CEP_Devedor", nullable: true, length: 50 })
  cepDevedor: string | null;

  @Column("nvarchar", { name: "Cidade_Devedor", nullable: true, length: 50 })
  cidadeDevedor: string | null;

  @Column("nvarchar", { name: "UF_Devedor", nullable: true, length: 2 })
  ufDevedor: string | null;

  @Column("nvarchar", { name: "Nosso_Num", nullable: true, length: 50 })
  nossoNum: string | null;

  @Column("nvarchar", { name: "Emissao", nullable: true, length: 50 })
  emissao: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("nvarchar", { name: "Praca", nullable: true, length: 50 })
  praca: string | null;

  @Column("int", { name: "Protocolo_Dist", nullable: true })
  protocoloDist: number | null;

  @Column("nvarchar", { name: "Cod_Irregular", nullable: true, length: 2 })
  codIrregular: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "apLivro", nullable: true })
  apLivro: number | null;

  @Column("int", { name: "apPagina", nullable: true })
  apPagina: number | null;

  @Column("int", { name: "apTitulo", nullable: true })
  apTitulo: number | null;

  @Column("nvarchar", { name: "Endosso", nullable: true, length: 1 })
  endosso: string | null;
}
