import { Column, Entity, Index } from "typeorm";

@Index("PK_tblImport", ["protocoloCartorio"], { unique: true })
@Entity("tblImport", { schema: "dbo" })
export class TblImport {
  @Column("nvarchar", { name: "Ag_CodCedente", nullable: true, length: 15 })
  agCodCedente: string | null;

  @Column("nvarchar", { name: "Cedente", nullable: true, length: 45 })
  cedente: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 3 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("nvarchar", { name: "Emissao", nullable: true, length: 8 })
  emissao: string | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 11 })
  numTitulo: string | null;

  @Column("nvarchar", { name: "Moeda", nullable: true, length: 3 })
  moeda: string | null;

  @Column("money", { name: "Valor", nullable: true })
  valor: number | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "CodPortador", nullable: true, length: 50 })
  codPortador: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 45 })
  sacador: string | null;

  @Column("nvarchar", { name: "Endosso", nullable: true, length: 1 })
  endosso: string | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 45 })
  devedor: string | null;

  @Column("nvarchar", { name: "Id_Devedor", nullable: true, length: 3 })
  idDevedor: string | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 18 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "End_Devedor", nullable: true, length: 45 })
  endDevedor: string | null;

  @Column("nvarchar", { name: "CEP_Devedor", nullable: true, length: 8 })
  cepDevedor: string | null;

  @Column("nvarchar", { name: "Bairro_Devedor", nullable: true, length: 20 })
  bairroDevedor: string | null;

  @Column("nvarchar", { name: "Cidade_Devedor", nullable: true, length: 20 })
  cidadeDevedor: string | null;

  @Column("nvarchar", { name: "Uf_Devedor", nullable: true, length: 2 })
  ufDevedor: string | null;

  @Column("nvarchar", { name: "Praca", nullable: true, length: 20 })
  praca: string | null;

  @Column("nvarchar", { name: "Doc_Sacador", nullable: true, length: 14 })
  docSacador: string | null;

  @Column("nvarchar", { name: "End_Sacador", nullable: true, length: 45 })
  endSacador: string | null;

  @Column("nvarchar", { name: "Cep_Sacador", nullable: true, length: 8 })
  cepSacador: string | null;

  @Column("nvarchar", { name: "Cidade_Sacador", nullable: true, length: 20 })
  cidadeSacador: string | null;

  @Column("nvarchar", { name: "Uf_Sacador", nullable: true, length: 2 })
  ufSacador: string | null;

  @Column("nvarchar", { name: "Nosso_Num", nullable: true, length: 15 })
  nossoNum: string | null;

  @Column("nvarchar", { name: "Num_Cartorio", nullable: true, length: 2 })
  numCartorio: string | null;

  @Column("nvarchar", { primary: true, name: "Protocolo_Cartorio", length: 10 })
  protocoloCartorio: string;

  @Column("nvarchar", { name: "Tipo_Ocorrencia", nullable: true, length: 1 })
  tipoOcorrencia: string | null;

  @Column("nvarchar", { name: "Data_Protocolo", nullable: true, length: 8 })
  dataProtocolo: string | null;

  @Column("nvarchar", { name: "Data_Ocorrencia", nullable: true, length: 8 })
  dataOcorrencia: string | null;

  @Column("float", { name: "Valor_Custas", nullable: true, precision: 53 })
  valorCustas: number | null;

  @Column("nvarchar", { name: "Falencia", nullable: true, length: 1 })
  falencia: string | null;

  @Column("nvarchar", { name: "Nome_Arq_Remessa", nullable: true, length: 12 })
  nomeArqRemessa: string | null;

  @Column("nvarchar", { name: "Num_Seq_Arq", nullable: true, length: 4 })
  numSeqArq: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("int", { name: "Protocolo_Dist", nullable: true })
  protocoloDist: number | null;

  @Column("bit", { name: "TAB", nullable: true })
  tab: boolean | null;
}
