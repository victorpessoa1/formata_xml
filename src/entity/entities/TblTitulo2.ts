import { Column, Entity } from "typeorm";

@Entity("tblTitulo2", { schema: "dbo" })
export class TblTitulo2 {
  @Column("int", { name: "idProtocolo" })
  idProtocolo: number;

  @Column("datetime", { name: "Data_Apresenta", nullable: true })
  dataApresenta: Date | null;

  @Column("datetime", { name: "Data_Protesto", nullable: true })
  dataProtesto: Date | null;

  @Column("nvarchar", { name: "Ag_CodCedente", nullable: true, length: 15 })
  agCodCedente: string | null;

  @Column("nvarchar", { name: "CodPortador", nullable: true, length: 50 })
  codPortador: string | null;

  @Column("nvarchar", { name: "Cedente", nullable: true, length: 200 })
  cedente: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 200 })
  sacador: string | null;

  @Column("nvarchar", { name: "Doc_Sacador", nullable: true, length: 200 })
  docSacador: string | null;

  @Column("nvarchar", { name: "End_Sacador", nullable: true, length: 200 })
  endSacador: string | null;

  @Column("nvarchar", { name: "CEP_Sacador", nullable: true, length: 20 })
  cepSacador: string | null;

  @Column("nvarchar", { name: "Cidade_Sacador", nullable: true, length: 20 })
  cidadeSacador: string | null;

  @Column("nvarchar", { name: "UF_Sacador", nullable: true, length: 100 })
  ufSacador: string | null;

  @Column("nvarchar", { name: "Nosso_Num", nullable: true, length: 50 })
  nossoNum: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 20 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 200 })
  numTitulo: string | null;

  @Column("nvarchar", { name: "Emissao", nullable: true, length: 10 })
  emissao: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 10 })
  vencimento: string | null;

  @Column("nvarchar", { name: "Moeda", nullable: true, length: 3 })
  moeda: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "Praca", nullable: true, length: 20 })
  praca: string | null;

  @Column("nvarchar", { name: "Endosso", nullable: true, length: 50 })
  endosso: string | null;

  @Column("nvarchar", { name: "Aceite", nullable: true, length: 1 })
  aceite: string | null;

  @Column("int", { name: "Control_Devedor", nullable: true })
  controlDevedor: number | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 100 })
  devedor: string | null;

  @Column("int", { name: "Id_Devedor", nullable: true })
  idDevedor: number | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 18 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "Doc_Devedor", nullable: true, length: 11 })
  docDevedor: string | null;

  @Column("nvarchar", { name: "End_Devedor", nullable: true, length: 200 })
  endDevedor: string | null;

  @Column("nvarchar", { name: "CEP_Devedor", nullable: true, length: 20 })
  cepDevedor: string | null;

  @Column("nvarchar", { name: "Cidade_Devedor", nullable: true, length: 200 })
  cidadeDevedor: string | null;

  @Column("nvarchar", { name: "UF_Devedor", nullable: true, length: 2 })
  ufDevedor: string | null;

  @Column("nvarchar", { name: "Num_Cartorio", nullable: true, length: 2 })
  numCartorio: string | null;

  @Column("int", { name: "Protocolo_Cartorio", nullable: true })
  protocoloCartorio: number | null;

  @Column("nvarchar", { name: "Tipo_Ocorrencia", nullable: true, length: 50 })
  tipoOcorrencia: string | null;

  @Column("nvarchar", { name: "Data_Protocolo", nullable: true, length: 8 })
  dataProtocolo: string | null;

  @Column("real", { name: "Valor_Custas", nullable: true, precision: 24 })
  valorCustas: number | null;

  @Column("nvarchar", {
    name: "Declaracao_Portador",
    nullable: true,
    length: 1,
  })
  declaracaoPortador: string | null;

  @Column("nvarchar", { name: "Data_Ocorrencia", nullable: true, length: 50 })
  dataOcorrencia: string | null;

  @Column("datetime", { name: "Data_Ocorr", nullable: true })
  dataOcorr: Date | null;

  @Column("datetime", { name: "Data_Retorno", nullable: true })
  dataRetorno: Date | null;

  @Column("datetime", { name: "Data_Retirada", nullable: true })
  dataRetirada: Date | null;

  @Column("datetime", { name: "Data_Protestado", nullable: true })
  dataProtestado: Date | null;

  @Column("datetime", { name: "Data_Pagamento", nullable: true })
  dataPagamento: Date | null;

  @Column("nvarchar", { name: "Cod_Irregular", nullable: true, length: 2 })
  codIrregular: string | null;

  @Column("nvarchar", { name: "Bairro_Devedor", nullable: true, length: 200 })
  bairroDevedor: string | null;

  @Column("int", { name: "Custas_Distrib", nullable: true })
  custasDistrib: number | null;

  @Column("nvarchar", { name: "Complem_Reg", nullable: true, length: 79 })
  complemReg: string | null;

  @Column("nvarchar", { name: "Num_Seq_Arq", nullable: true, length: 4 })
  numSeqArq: string | null;

  @Column("nvarchar", { name: "Nome_Arq_Remessa", nullable: true, length: 12 })
  nomeArqRemessa: string | null;

  @Column("bit", { name: "Baixado", nullable: true })
  baixado: boolean | null;

  @Column("bit", { name: "Protestado", nullable: true })
  protestado: boolean | null;

  @Column("bit", { name: "Lancamento", nullable: true })
  lancamento: boolean | null;

  @Column("bit", { name: "Intimado", nullable: true })
  intimado: boolean | null;

  @Column("real", { name: "Pagar", nullable: true, precision: 24 })
  pagar: number | null;

  @Column("nvarchar", { name: "Condicao", nullable: true, length: 50 })
  condicao: string | null;

  @Column("nvarchar", { name: "Origem", nullable: true, length: 50 })
  origem: string | null;

  @Column("int", { name: "Livro", nullable: true })
  livro: number | null;

  @Column("int", { name: "Pagina", nullable: true })
  pagina: number | null;

  @Column("bit", { name: "Edital", nullable: true })
  edital: boolean | null;

  @Column("bit", { name: "Fora_Area", nullable: true })
  foraArea: boolean | null;

  @Column("bit", { name: "Arq_Livro", nullable: true })
  arqLivro: boolean | null;

  @Column("datetime", { name: "CalcVenc", nullable: true })
  calcVenc: Date | null;

  @Column("bit", { name: "InfoProtesto", nullable: true })
  infoProtesto: boolean | null;

  @Column("bit", { name: "InfoCancelado", nullable: true })
  infoCancelado: boolean | null;

  @Column("datetime", { name: "Data_Cancelado", nullable: true })
  dataCancelado: Date | null;

  @Column("bit", { name: "Tit_Particular", nullable: true })
  titParticular: boolean | null;

  @Column("bit", { name: "Digitado", nullable: true })
  digitado: boolean | null;

  @Column("bit", { name: "Retorno", nullable: true })
  retorno: boolean | null;

  @Column("int", { name: "apLivro", nullable: true })
  apLivro: number | null;

  @Column("int", { name: "apPagina", nullable: true })
  apPagina: number | null;

  @Column("int", { name: "apTitulo", nullable: true })
  apTitulo: number | null;

  @Column("bit", { name: "Editado", nullable: true })
  editado: boolean | null;

  @Column("datetime", { name: "DataEditado", nullable: true })
  dataEditado: Date | null;

  @Column("bit", { name: "Devolver", nullable: true })
  devolver: boolean | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 255 })
  portador: string | null;

  @Column("int", { name: "Id_Portador", nullable: true })
  idPortador: number | null;

  @Column("float", { name: "V_Selo", nullable: true, precision: 53 })
  vSelo: number | null;

  @Column("float", { name: "V_Apontamento", nullable: true, precision: 53 })
  vApontamento: number | null;

  @Column("float", { name: "V_Intimacao", nullable: true, precision: 53 })
  vIntimacao: number | null;

  @Column("float", { name: "V_Edital", nullable: true, precision: 53 })
  vEdital: number | null;

  @Column("float", { name: "V_CPD", nullable: true, precision: 53 })
  vCpd: number | null;

  @Column("float", { name: "V_Protesto", nullable: true, precision: 53 })
  vProtesto: number | null;

  @Column("float", { name: "V_Total", nullable: true, precision: 53 })
  vTotal: number | null;

  @Column("bit", { name: "Telegrama", nullable: true })
  telegrama: boolean | null;

  @Column("nvarchar", { name: "N_Telegrama", nullable: true, length: 50 })
  nTelegrama: string | null;

  @Column("int", { name: "N_Edital", nullable: true })
  nEdital: number | null;

  @Column("nvarchar", { name: "txtTipo", nullable: true, length: 50 })
  txtTipo: string | null;

  @Column("nvarchar", { name: "txtNum", nullable: true, length: 50 })
  txtNum: string | null;

  @Column("nvarchar", {
    name: "txtContraProtesto",
    nullable: true,
    length: 255,
  })
  txtContraProtesto: string | null;

  @Column("nvarchar", { name: "txtGeral", nullable: true, length: 50 })
  txtGeral: string | null;

  @Column("nvarchar", { name: "txtTexto", nullable: true, length: 50 })
  txtTexto: string | null;

  @Column("real", { name: "txtJuros", nullable: true, precision: 24 })
  txtJuros: number | null;

  @Column("datetime", { name: "txtData", nullable: true })
  txtData: Date | null;

  @Column("bit", { name: "InfoRetirado", nullable: true })
  infoRetirado: boolean | null;

  @Column("bit", { name: "InfoPagamento", nullable: true })
  infoPagamento: boolean | null;

  @Column("bit", { name: "Contraprotesto", nullable: true })
  contraprotesto: boolean | null;

  @Column("real", { name: "Adiantamento", nullable: true, precision: 24 })
  adiantamento: number | null;

  @Column("real", { name: "Mora", nullable: true, precision: 24 })
  mora: number | null;

  @Column("real", { name: "txtCalcJuros", nullable: true, precision: 24 })
  txtCalcJuros: number | null;

  @Column("nvarchar", { name: "User", nullable: true, length: 50 })
  user: string | null;

  @Column("bit", { name: "Pgto_CH", nullable: true })
  pgtoCh: boolean | null;

  @Column("real", { name: "Valor_Juros", nullable: true, precision: 24 })
  valorJuros: number | null;

  @Column("real", { name: "Valor_CPMF", nullable: true, precision: 24 })
  valorCpmf: number | null;

  @Column("real", { name: "Valor_Selo", nullable: true, precision: 24 })
  valorSelo: number | null;

  @Column("real", { name: "Valor_TotMora", nullable: true, precision: 24 })
  valorTotMora: number | null;

  @Column("bit", { name: "Aguardando", nullable: true })
  aguardando: boolean | null;

  @Column("bit", { name: "CancelaBanco", nullable: true })
  cancelaBanco: boolean | null;

  @Column("real", { name: "VlrRemessa", nullable: true, precision: 24 })
  vlrRemessa: number | null;

  @Column("bit", { name: "SitAntigo", nullable: true })
  sitAntigo: boolean | null;

  @Column("real", { name: "Multa", nullable: true, precision: 24 })
  multa: number | null;

  @Column("bit", { name: "Anulado", nullable: true })
  anulado: boolean | null;

  @Column("real", { name: "Valor_Distrib", nullable: true, precision: 24 })
  valorDistrib: number | null;

  @Column("real", { name: "V_Multa", nullable: true, precision: 24 })
  vMulta: number | null;

  @Column("bit", { name: "Rec_Canc", nullable: true })
  recCanc: boolean | null;

  @Column("bit", { name: "Rec_Prot", nullable: true })
  recProt: boolean | null;

  @Column("bit", { name: "Rec_Ret", nullable: true })
  recRet: boolean | null;

  @Column("nvarchar", { name: "Cad_Retorno", nullable: true, length: 1 })
  cadRetorno: string | null;

  @Column("nvarchar", { name: "Representante", nullable: true, length: 50 })
  representante: string | null;

  @Column("datetime", { name: "dEdital", nullable: true })
  dEdital: Date | null;

  @Column("bit", { name: "CartaReg", nullable: true })
  cartaReg: boolean | null;

  @Column("nvarchar", { name: "NumCartaReg", nullable: true, length: 20 })
  numCartaReg: string | null;

  @Column("bit", { name: "CustasProtesto", nullable: true })
  custasProtesto: boolean | null;

  @Column("bit", { name: "Cheque3", nullable: true })
  cheque3: boolean | null;

  @Column("int", { name: "Protocolo_Dist", nullable: true })
  protocoloDist: number | null;

  @Column("uniqueidentifier", { name: "rowguid" })
  rowguid: string;

  @Column("int", { name: "Banco", nullable: true })
  banco: number | null;

  @Column("bit", { name: "Apontado", nullable: true })
  apontado: boolean | null;

  @Column("bit", { name: "Marca", nullable: true })
  marca: boolean | null;

  @Column("bit", { name: "Anuencia", nullable: true })
  anuencia: boolean | null;

  @Column("bit", { name: "TAB", nullable: true })
  tab: boolean | null;

  @Column("bit", { name: "RetCenprot", nullable: true })
  retCenprot: boolean | null;

  @Column("nvarchar", { name: "Falencia", nullable: true, length: 1 })
  falencia: string | null;

  @Column("bit", { name: "MarcaProtSerasa", nullable: true })
  marcaProtSerasa: boolean | null;

  @Column("bit", { name: "MarcaProtBV", nullable: true })
  marcaProtBv: boolean | null;

  @Column("bit", { name: "MarcaCancSerasa", nullable: true })
  marcaCancSerasa: boolean | null;

  @Column("bit", { name: "MarcaCancBV", nullable: true })
  marcaCancBv: boolean | null;

  @Column("int", { name: "RemessaBV", nullable: true })
  remessaBv: number | null;

  @Column("int", { name: "RemessaSerasa", nullable: true })
  remessaSerasa: number | null;

  @Column("nvarchar", { name: "Obs", nullable: true })
  obs: string | null;

  @Column("datetime", { name: "RetornoCENPROT", nullable: true })
  retornoCenprot: Date | null;

  @Column("datetime", { name: "Data_Intimado", nullable: true })
  dataIntimado: Date | null;

  @Column("datetime", { name: "Ocorrencia_Diaria", nullable: true })
  ocorrenciaDiaria: Date | null;

  @Column("nvarchar", { name: "Cod_Ocorrencia", nullable: true, length: 50 })
  codOcorrencia: string | null;
}
