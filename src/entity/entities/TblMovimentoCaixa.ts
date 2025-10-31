import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblMovimentoCaixa", ["id"], { unique: true })
@Entity("tblMovimentoCaixa", { schema: "dbo" })
export class TblMovimentoCaixa {
  @Column("nvarchar", { name: "Protocolo", nullable: true, length: 50 })
  protocolo: string | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 50 })
  numTitulo: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 50 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("datetime", { name: "Data_Apresenta", nullable: true })
  dataApresenta: Date | null;

  @Column("nvarchar", { name: "Origem", nullable: true, length: 50 })
  origem: string | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("float", { name: "Custas", nullable: true, precision: 53 })
  custas: number | null;

  @Column("float", { name: "Selo", nullable: true, precision: 53 })
  selo: number | null;

  @Column("float", { name: "Distrib", nullable: true, precision: 53 })
  distrib: number | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 200 })
  devedor: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 200 })
  sacador: string | null;

  @Column("nvarchar", { name: "Nosso_Num", nullable: true, length: 50 })
  nossoNum: string | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 200 })
  portador: string | null;

  @Column("float", { name: "Adiantamento", nullable: true, precision: 53 })
  adiantamento: number | null;

  @Column("float", { name: "Valor_Juros", nullable: true, precision: 53 })
  valorJuros: number | null;

  @Column("float", { name: "Valor_Mora", nullable: true, precision: 53 })
  valorMora: number | null;

  @Column("float", { name: "V_Multa", nullable: true, precision: 53 })
  vMulta: number | null;

  @Column("int", { name: "Livro", nullable: true })
  livro: number | null;

  @Column("int", { name: "Folha", nullable: true })
  folha: number | null;

  @Column("nvarchar", { name: "Usuario", nullable: true, length: 50 })
  usuario: string | null;

  @Column("float", { name: "CPMF", nullable: true, precision: 53 })
  cpmf: number | null;

  @Column("datetime", { name: "Hora", nullable: true })
  hora: Date | null;

  @Column("datetime", { name: "Data_Certidao", nullable: true })
  dataCertidao: Date | null;

  @Column("nvarchar", { name: "Tipo_Certidao", nullable: true, length: 50 })
  tipoCertidao: string | null;

  @Column("nvarchar", { name: "Num_Doc", nullable: true, length: 14 })
  numDoc: string | null;

  @Column("nvarchar", { name: "Texto", nullable: true, length: 50 })
  texto: string | null;

  @Column("float", { name: "rDistrib", nullable: true, precision: 53 })
  rDistrib: number | null;

  @Column("nvarchar", { name: "Tipo_Baixa", nullable: true, length: 50 })
  tipoBaixa: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("float", { name: "FRJ", nullable: true, precision: 53 })
  frj: number | null;

  @Column("float", { name: "FRC", nullable: true, precision: 53 })
  frc: number | null;

  @Column("float", { name: "TxBanco", nullable: true, precision: 53 })
  txBanco: number | null;

  @Column("float", { name: "TxCartao", nullable: true, precision: 53 })
  txCartao: number | null;

  @Column("datetime", { name: "Data_Ocorrencia", nullable: true })
  dataOcorrencia: Date | null;

  @Column("int", { name: "Cod_Ato", nullable: true })
  codAto: number | null;

  @Column("nvarchar", { name: "Historico", nullable: true })
  historico: string | null;

  @Column("int", { name: "Contador", nullable: true })
  contador: number | null;

  @Column("float", { name: "ISS", nullable: true, precision: 53 })
  iss: number | null;

  @Column("bit", { name: "Cartao", nullable: true })
  cartao: boolean | null;

  @Column("datetime", { name: "Data_Protestado", nullable: true })
  dataProtestado: Date | null;
}
