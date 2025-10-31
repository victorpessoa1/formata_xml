import { Column, Entity, Index } from "typeorm";

@Index("PK_tblSomaValor", ["protocolo"], { unique: true })
@Entity("tblSomaValor", { schema: "dbo" })
export class TblSomaValor {
  @Column("int", { primary: true, name: "Protocolo" })
  protocolo: number;

  @Column("float", { name: "Vlr_Titulo", nullable: true, precision: 53 })
  vlrTitulo: number | null;

  @Column("float", { name: "vlr_Custas", nullable: true, precision: 53 })
  vlrCustas: number | null;

  @Column("float", { name: "Vlr_Juros", nullable: true, precision: 53 })
  vlrJuros: number | null;

  @Column("float", { name: "Vlr_Mora", nullable: true, precision: 53 })
  vlrMora: number | null;

  @Column("float", { name: "Vlr_Cpmf", nullable: true, precision: 53 })
  vlrCpmf: number | null;

  @Column("float", { name: "Vlr_Selo", nullable: true, precision: 53 })
  vlrSelo: number | null;

  @Column("float", { name: "Valor_Total", nullable: true, precision: 53 })
  valorTotal: number | null;

  @Column("bit", { name: "Excluir", nullable: true })
  excluir: boolean | null;

  @Column("datetime", { name: "Vencimento", nullable: true })
  vencimento: Date | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 50 })
  sacador: string | null;

  @Column("nvarchar", { name: "Cedente", nullable: true, length: 50 })
  cedente: string | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 50 })
  devedor: string | null;

  @Column("nvarchar", { name: "NossoNum", nullable: true, length: 50 })
  nossoNum: string | null;

  @Column("datetime", { name: "Entrada", nullable: true })
  entrada: Date | null;

  @Column("nvarchar", { name: "NumTitulo", nullable: true, length: 50 })
  numTitulo: string | null;

  @Column("nvarchar", { name: "Apresentante", nullable: true, length: 50 })
  apresentante: string | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 50 })
  portador: string | null;

  @Column("nvarchar", { name: "Tipo_Ocorrencia", nullable: true, length: 50 })
  tipoOcorrencia: string | null;

  @Column("nvarchar", { name: "Data_Ocorrencia", nullable: true, length: 50 })
  dataOcorrencia: string | null;

  @Column("float", { name: "Vlr_Remessa", nullable: true, precision: 53 })
  vlrRemessa: number | null;

  @Column("datetime", { name: "Data_Pagamento", nullable: true })
  dataPagamento: Date | null;

  @Column("datetime", { name: "Data_Cancelamento", nullable: true })
  dataCancelamento: Date | null;

  @Column("int", { name: "Livro", nullable: true })
  livro: number | null;

  @Column("int", { name: "Folha", nullable: true })
  folha: number | null;

  @Column("bit", { name: "Pgto_CH", nullable: true })
  pgtoCh: boolean | null;

  @Column("float", { name: "Vlr_Distrib", nullable: true, precision: 53 })
  vlrDistrib: number | null;

  @Column("float", { name: "Multa", nullable: true, precision: 53 })
  multa: number | null;

  @Column("bit", { name: "Particular", nullable: true })
  particular: boolean | null;

  @Column("int", { name: "QtdeSG", nullable: true })
  qtdeSg: number | null;

  @Column("int", { name: "Cod_Ato", nullable: true })
  codAto: number | null;

  @Column("bit", { name: "Editado", nullable: true })
  editado: boolean | null;

  @Column("float", { name: "Valor_Emol", nullable: true, precision: 53 })
  valorEmol: number | null;

  @Column("int", { name: "nFaixa0", nullable: true })
  nFaixa0: number | null;

  @Column("nvarchar", { name: "Selo1", nullable: true, length: 50 })
  selo1: string | null;

  @Column("nvarchar", { name: "Selo2", nullable: true, length: 50 })
  selo2: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("nvarchar", { name: "Selo3", nullable: true, length: 50 })
  selo3: string | null;

  @Column("real", { name: "FRJ", nullable: true, precision: 24 })
  frj: number | null;

  @Column("real", { name: "FRC", nullable: true, precision: 24 })
  frc: number | null;
}
