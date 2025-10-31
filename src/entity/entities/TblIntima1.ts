import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblIntima1", ["idProtocolo"], { unique: true })
@Entity("tblIntima1", { schema: "dbo" })
export class TblIntima1 {
  @Column("int", { name: "Protocolo_Cartorio", nullable: true })
  protocoloCartorio: number | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 45 })
  devedor: string | null;

  @Column("nvarchar", { name: "End_Devedor", nullable: true, length: 45 })
  endDevedor: string | null;

  @Column("nvarchar", { name: "Bairro_Devedor", nullable: true, length: 20 })
  bairroDevedor: string | null;

  @Column("nvarchar", { name: "CEP_Devedor", nullable: true, length: 8 })
  cepDevedor: string | null;

  @Column("nvarchar", { name: "Cidade_Devedor", nullable: true, length: 20 })
  cidadeDevedor: string | null;

  @Column("nvarchar", { name: "UF_Devedor", nullable: true, length: 2 })
  ufDevedor: string | null;

  @Column("bit", { name: "Intimado", nullable: true })
  intimado: boolean | null;

  @Column("bit", { name: "Baixado", nullable: true })
  baixado: boolean | null;

  @Column("bit", { name: "Protestado", nullable: true })
  protestado: boolean | null;

  @Column("nvarchar", { name: "CodPortador", nullable: true, length: 50 })
  codPortador: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 50 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 11 })
  numTitulo: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 8 })
  vencimento: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 45 })
  sacador: string | null;

  @Column("nvarchar", { name: "Cedente", nullable: true, length: 45 })
  cedente: string | null;

  @Column("nvarchar", { name: "Condicao", nullable: true, length: 50 })
  condicao: string | null;

  @Column("nvarchar", { name: "Origem", nullable: true, length: 50 })
  origem: string | null;

  @Column("bit", { name: "Fora_Area", nullable: true })
  foraArea: boolean | null;

  @Column("nvarchar", { name: "Emissao", nullable: true, length: 8 })
  emissao: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "idProtocolo" })
  idProtocolo: number;

  @Column("bit", { name: "Edital", nullable: true })
  edital: boolean | null;

  @Column("bit", { name: "Devolver", nullable: true })
  devolver: boolean | null;

  @Column("datetime", { name: "Data_Apresenta", nullable: true })
  dataApresenta: Date | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 50 })
  portador: string | null;

  @Column("bit", { name: "Telegrama", nullable: true })
  telegrama: boolean | null;

  @Column("nvarchar", { name: "Endosso", nullable: true, length: 1 })
  endosso: string | null;

  @Column("float", { name: "Custas", nullable: true, precision: 53 })
  custas: number | null;

  @Column("float", { name: "Selo", nullable: true, precision: 53 })
  selo: number | null;

  @Column("float", { name: "Juros", nullable: true, precision: 53 })
  juros: number | null;

  @Column("float", { name: "Multa", nullable: true, precision: 53 })
  multa: number | null;

  @Column("nvarchar", { name: "Representante", nullable: true, length: 200 })
  representante: string | null;

  @Column("nvarchar", { name: "Rep", nullable: true, length: 200 })
  rep: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 18 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "QRCode", nullable: true, length: 255 })
  qrCode: string | null;

  @Column("nvarchar", { name: "N_Selo", nullable: true, length: 50 })
  nSelo: string | null;

  @Column("nvarchar", { name: "Serie", nullable: true, length: 3 })
  serie: string | null;

  @Column("nvarchar", { name: "Cod_Seg", nullable: true, length: 50 })
  codSeg: string | null;

  @Column("float", { name: "Emolumentos", nullable: true, precision: 53 })
  emolumentos: number | null;

  @Column("float", { name: "FRJ", nullable: true, precision: 53 })
  frj: number | null;

  @Column("float", { name: "FRC", nullable: true, precision: 53 })
  frc: number | null;

  @Column("nvarchar", { name: "NCod", nullable: true, length: 50 })
  nCod: string | null;

  @Column("bit", { name: "Boletos", nullable: true })
  boletos: boolean | null;

  @Column("float", { name: "VlrCustasProt", nullable: true, precision: 53 })
  vlrCustasProt: number | null;

  @Column("float", { name: "VlrCancela", nullable: true, precision: 53 })
  vlrCancela: number | null;

  @Column("int", { name: "ProtocoloDist", nullable: true })
  protocoloDist: number | null;
}
