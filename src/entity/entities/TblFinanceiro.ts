import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblFinanceiro1", ["idFinanceiro"], { unique: true })
@Entity("tblFinanceiro", { schema: "dbo" })
export class TblFinanceiro {
  @PrimaryGeneratedColumn({ type: "int", name: "idFinanceiro" })
  idFinanceiro: number;

  @Column("nvarchar", { name: "CodPortador", nullable: true, length: 50 })
  codPortador: string | null;

  @Column("datetime", { name: "Data_Entrada", nullable: true })
  dataEntrada: Date | null;

  @Column("nvarchar", { name: "Data_Ocorrencia", nullable: true, length: 50 })
  dataOcorrencia: string | null;

  @Column("nvarchar", { name: "Protocolo", nullable: true, length: 50 })
  protocolo: string | null;

  @Column("float", { name: "Custas", nullable: true, precision: 53 })
  custas: number | null;

  @Column("nvarchar", { name: "Tipo_Ocorrencia", nullable: true, length: 50 })
  tipoOcorrencia: string | null;

  @Column("float", { name: "Pagar", nullable: true, precision: 53 })
  pagar: number | null;

  @Column("float", { name: "Valor_Tit", nullable: true, precision: 53 })
  valorTit: number | null;

  @Column("float", { name: "Valor_Juros", nullable: true, precision: 53 })
  valorJuros: number | null;

  @Column("float", { name: "Valor_CPMF", nullable: true, precision: 53 })
  valorCpmf: number | null;

  @Column("float", { name: "Valor_Selo", nullable: true, precision: 53 })
  valorSelo: number | null;

  @Column("float", { name: "Valor_Mora", nullable: true, precision: 53 })
  valorMora: number | null;

  @Column("datetime", { name: "Data_Pagamento", nullable: true })
  dataPagamento: Date | null;

  @Column("datetime", { name: "Data_Retirada", nullable: true })
  dataRetirada: Date | null;

  @Column("datetime", { name: "Data_Cancelado", nullable: true })
  dataCancelado: Date | null;

  @Column("datetime", { name: "Data_Protesto", nullable: true })
  dataProtesto: Date | null;

  @Column("float", { name: "VlrRemessa", nullable: true, precision: 53 })
  vlrRemessa: number | null;

  @Column("float", { name: "VlrCertidao", nullable: true, precision: 53 })
  vlrCertidao: number | null;

  @Column("nvarchar", { name: "NomeCertidao", nullable: true, length: 200 })
  nomeCertidao: string | null;

  @Column("nvarchar", { name: "DocCertidao", nullable: true, length: 50 })
  docCertidao: string | null;

  @Column("nvarchar", { name: "TipoCertidao", nullable: true, length: 50 })
  tipoCertidao: string | null;

  @Column("nvarchar", { name: "Usuario", nullable: true, length: 50 })
  usuario: string | null;

  @Column("bit", { name: "CancelaBanco", nullable: true })
  cancelaBanco: boolean | null;

  @Column("int", { name: "Livro", nullable: true })
  livro: number | null;

  @Column("int", { name: "Folha", nullable: true })
  folha: number | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 200 })
  devedor: string | null;

  @Column("datetime", { name: "DataInstProt2V", nullable: true })
  dataInstProt2V: Date | null;

  @Column("float", { name: "ValorInstProt2V", nullable: true, precision: 53 })
  valorInstProt2V: number | null;

  @Column("bit", { name: "Estorno", nullable: true })
  estorno: boolean | null;

  @Column("datetime", { name: "Hora", nullable: true })
  hora: Date | null;

  @Column("datetime", { name: "Data_Certidao", nullable: true })
  dataCertidao: Date | null;

  @Column("datetime", { name: "Recibo_Cancelados_Data", nullable: true })
  reciboCanceladosData: Date | null;

  @Column("float", {
    name: "Recibo_Cancelados_Valor",
    nullable: true,
    precision: 53,
  })
  reciboCanceladosValor: number | null;

  @Column("datetime", { name: "Recibo_Protestados_Data", nullable: true })
  reciboProtestadosData: Date | null;

  @Column("float", {
    name: "Recibo_Protestados_Valor",
    nullable: true,
    precision: 53,
  })
  reciboProtestadosValor: number | null;

  @Column("int", { name: "Contador", nullable: true })
  contador: number | null;

  @Column("datetime", { name: "Recibo_Negativa_Data", nullable: true })
  reciboNegativaData: Date | null;

  @Column("float", {
    name: "Recibo_Negativa_Valor",
    nullable: true,
    precision: 53,
  })
  reciboNegativaValor: number | null;

  @Column("float", { name: "Valor_Distrib", nullable: true, precision: 53 })
  valorDistrib: number | null;

  @Column("float", { name: "V_Multa", nullable: true, precision: 53 })
  vMulta: number | null;

  @Column("bit", { name: "Rec_Canc", nullable: true })
  recCanc: boolean | null;

  @Column("bit", { name: "Rec_Prot", nullable: true })
  recProt: boolean | null;

  @Column("bit", { name: "Rec_Ret", nullable: true })
  recRet: boolean | null;

  @Column("bit", { name: "Rec_ProtSerasa", nullable: true })
  recProtSerasa: boolean | null;

  @Column("bit", { name: "Rec_CancSerasa", nullable: true })
  recCancSerasa: boolean | null;

  @Column("bit", { name: "Rec_Comunicacao", nullable: true })
  recComunicacao: boolean | null;

  @Column("bit", { name: "Rec_CancGeral", nullable: true })
  recCancGeral: boolean | null;

  @Column("nvarchar", { name: "Codigo", nullable: true, length: 50 })
  codigo: string | null;

  @Column("int", { name: "QtdeSG", nullable: true })
  qtdeSg: number | null;

  @Column("int", { name: "QtdeSC", nullable: true })
  qtdeSc: number | null;

  @Column("bit", { name: "Pgto_CH", nullable: true })
  pgtoCh: boolean | null;

  @Column("nvarchar", { name: "Serasa_SCI", nullable: true, length: 50 })
  serasaSci: string | null;

  @Column("datetime", { name: "Data_Devolvido", nullable: true })
  dataDevolvido: Date | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("nvarchar", { name: "Pagante", nullable: true, length: 200 })
  pagante: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 3 })
  especieTit: string | null;

  @Column("float", { name: "FRJ", nullable: true, precision: 53 })
  frj: number | null;

  @Column("float", { name: "FRC", nullable: true, precision: 53 })
  frc: number | null;

  @Column("float", { name: "TED", nullable: true, precision: 53 })
  ted: number | null;

  @Column("float", { name: "TaxaCartao", nullable: true, precision: 53 })
  taxaCartao: number | null;

  @Column("nvarchar", { name: "Caminho_Selo", nullable: true })
  caminhoSelo: string | null;

  @Column("bit", { name: "Baixa_Lote", nullable: true })
  baixaLote: boolean | null;

  @Column("float", { name: "ISS", nullable: true, precision: 53 })
  iss: number | null;

  @Column("bit", { name: "Cartao", nullable: true })
  cartao: boolean | null;
}
