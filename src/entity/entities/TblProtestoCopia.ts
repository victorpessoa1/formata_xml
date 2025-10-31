import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblProtestoCopia", ["id"], { unique: true })
@Entity("tblProtestoCopia", { schema: "dbo" })
export class TblProtestoCopia {
  @Column("int", { name: "Protocolo_Cartorio", nullable: true })
  protocoloCartorio: number | null;

  @Column("datetime", { name: "Data_Apresenta", nullable: true })
  dataApresenta: Date | null;

  @Column("nvarchar", { name: "Origem", nullable: true, length: 50 })
  origem: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 50 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 11 })
  numTitulo: string | null;

  @Column("nvarchar", { name: "Emissao", nullable: true, length: 10 })
  emissao: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 10 })
  vencimento: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "CodPortador", nullable: true, length: 200 })
  codPortador: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 45 })
  sacador: string | null;

  @Column("nvarchar", { name: "Doc_Sacador", nullable: true, length: 14 })
  docSacador: string | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 100 })
  devedor: string | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 18 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "End_Devedor", nullable: true, length: 45 })
  endDevedor: string | null;

  @Column("nvarchar", { name: "CEP_Devedor", nullable: true, length: 8 })
  cepDevedor: string | null;

  @Column("nvarchar", { name: "Cidade_Devedor", nullable: true, length: 20 })
  cidadeDevedor: string | null;

  @Column("nvarchar", { name: "UF_Devedor", nullable: true, length: 2 })
  ufDevedor: string | null;

  @Column("int", { name: "Livro", nullable: true })
  livro: number | null;

  @Column("int", { name: "Pagina", nullable: true })
  pagina: number | null;

  @Column("datetime", { name: "Data_Retorno", nullable: true })
  dataRetorno: Date | null;

  @Column("bit", { name: "Arq_Livro", nullable: true })
  arqLivro: boolean | null;

  @Column("bit", { name: "Protestado", nullable: true })
  protestado: boolean | null;

  @Column("real", { name: "Valor_Custas", nullable: true, precision: 24 })
  valorCustas: number | null;

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

  @Column("nvarchar", { name: "N_Telegrama", nullable: true, length: 50 })
  nTelegrama: string | null;

  @Column("int", { name: "N_Edital", nullable: true })
  nEdital: number | null;

  @Column("datetime", { name: "DataEditado", nullable: true })
  dataEditado: Date | null;

  @Column("bit", { name: "Telegrama", nullable: true })
  telegrama: boolean | null;

  @Column("bit", { name: "Editado", nullable: true })
  editado: boolean | null;

  @Column("nvarchar", { name: "txtTipo", nullable: true, length: 50 })
  txtTipo: string | null;

  @Column("nvarchar", { name: "txtNum", nullable: true, length: 50 })
  txtNum: string | null;

  @Column("nvarchar", { name: "txtTexto", nullable: true, length: 50 })
  txtTexto: string | null;

  @Column("datetime", { name: "txtData", nullable: true })
  txtData: Date | null;

  @Column("nvarchar", { name: "txtGeral", nullable: true, length: 50 })
  txtGeral: string | null;

  @Column("nvarchar", {
    name: "txtContraProtesto",
    nullable: true,
    length: 255,
  })
  txtContraProtesto: string | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 200 })
  portador: string | null;

  @Column("nvarchar", { name: "Condicao", nullable: true, length: 50 })
  condicao: string | null;

  @Column("nvarchar", { name: "Endosso", nullable: true, length: 1 })
  endosso: string | null;

  @Column("nvarchar", { name: "Nosso_Num", nullable: true, length: 15 })
  nossoNum: string | null;

  @Column("datetime", { name: "Data_Protestado", nullable: true })
  dataProtestado: Date | null;

  @Column("int", { name: "apLivro", nullable: true })
  apLivro: number | null;

  @Column("int", { name: "apPagina", nullable: true })
  apPagina: number | null;

  @Column("nvarchar", { name: "Cedente", nullable: true, length: 45 })
  cedente: string | null;

  @Column("bit", { name: "SitAntigo", nullable: true })
  sitAntigo: boolean | null;

  @Column("real", { name: "Valor_Distrib", nullable: true, precision: 24 })
  valorDistrib: number | null;

  @Column("nvarchar", { name: "Praca", nullable: true, length: 20 })
  praca: string | null;

  @Column("nvarchar", { name: "Extenso", nullable: true, length: 200 })
  extenso: string | null;

  @Column("nvarchar", { name: "TipoAval1", nullable: true, length: 50 })
  tipoAval1: string | null;

  @Column("nvarchar", { name: "TipoAval2", nullable: true, length: 50 })
  tipoAval2: string | null;

  @Column("nvarchar", { name: "TipoAval3", nullable: true, length: 50 })
  tipoAval3: string | null;

  @Column("nvarchar", { name: "NomeAval1", nullable: true, length: 50 })
  nomeAval1: string | null;

  @Column("nvarchar", { name: "NomeAval2", nullable: true, length: 50 })
  nomeAval2: string | null;

  @Column("nvarchar", { name: "NomeAval3", nullable: true, length: 50 })
  nomeAval3: string | null;

  @Column("nvarchar", { name: "DocAval1", nullable: true, length: 50 })
  docAval1: string | null;

  @Column("nvarchar", { name: "DocAval2", nullable: true, length: 50 })
  docAval2: string | null;

  @Column("nvarchar", { name: "DocAval3", nullable: true, length: 50 })
  docAval3: string | null;

  @Column("nvarchar", { name: "EndAval1", nullable: true, length: 50 })
  endAval1: string | null;

  @Column("nvarchar", { name: "EndAval2", nullable: true, length: 50 })
  endAval2: string | null;

  @Column("nvarchar", { name: "EndAval3", nullable: true, length: 50 })
  endAval3: string | null;

  @Column("nvarchar", { name: "CEPAval1", nullable: true, length: 50 })
  cepAval1: string | null;

  @Column("nvarchar", { name: "CEPAval2", nullable: true, length: 50 })
  cepAval2: string | null;

  @Column("nvarchar", { name: "CEPAval3", nullable: true, length: 50 })
  cepAval3: string | null;

  @Column("nvarchar", { name: "CidadeAval1", nullable: true, length: 50 })
  cidadeAval1: string | null;

  @Column("nvarchar", { name: "CidadeAval2", nullable: true, length: 50 })
  cidadeAval2: string | null;

  @Column("nvarchar", { name: "CidadeAval3", nullable: true, length: 50 })
  cidadeAval3: string | null;

  @Column("nvarchar", { name: "UFAval1", nullable: true, length: 50 })
  ufAval1: string | null;

  @Column("nvarchar", { name: "UFAval2", nullable: true, length: 50 })
  ufAval2: string | null;

  @Column("nvarchar", { name: "UFAval3", nullable: true, length: 50 })
  ufAval3: string | null;

  @Column("nvarchar", { name: "txtTipoAval1", nullable: true, length: 50 })
  txtTipoAval1: string | null;

  @Column("nvarchar", { name: "txtTipoAval2", nullable: true, length: 50 })
  txtTipoAval2: string | null;

  @Column("nvarchar", { name: "txtTipoAval3", nullable: true, length: 50 })
  txtTipoAval3: string | null;

  @Column("nvarchar", { name: "txtNumAval1", nullable: true, length: 50 })
  txtNumAval1: string | null;

  @Column("nvarchar", { name: "txtNumAval2", nullable: true, length: 50 })
  txtNumAval2: string | null;

  @Column("nvarchar", { name: "txtNumAval3", nullable: true, length: 50 })
  txtNumAval3: string | null;

  @Column("nvarchar", { name: "txtTextoAval1", nullable: true, length: 50 })
  txtTextoAval1: string | null;

  @Column("nvarchar", { name: "txtTextoAval2", nullable: true, length: 50 })
  txtTextoAval2: string | null;

  @Column("nvarchar", { name: "txtTextoAval3", nullable: true, length: 50 })
  txtTextoAval3: string | null;

  @Column("nvarchar", { name: "txtDataAval1", nullable: true, length: 50 })
  txtDataAval1: string | null;

  @Column("nvarchar", { name: "txtDataAval2", nullable: true, length: 50 })
  txtDataAval2: string | null;

  @Column("nvarchar", { name: "txtDataAval3", nullable: true, length: 50 })
  txtDataAval3: string | null;

  @Column("nvarchar", { name: "Nome_Ass", nullable: true, length: 50 })
  nomeAss: string | null;

  @Column("float", { name: "V_2Via", nullable: true, precision: 53 })
  v_2Via: number | null;

  @Column("bit", { name: "ContraProtesto", nullable: true })
  contraProtesto: boolean | null;

  @Column("nvarchar", { name: "Extenso2Via", nullable: true, length: 100 })
  extenso2Via: string | null;

  @Column("nvarchar", { name: "Representante", nullable: true, length: 50 })
  representante: string | null;

  @Column("nvarchar", { name: "NumS1", nullable: true, length: 50 })
  numS1: string | null;

  @Column("nvarchar", { name: "NumS2", nullable: true, length: 50 })
  numS2: string | null;

  @Column("nvarchar", { name: "NumS3", nullable: true, length: 50 })
  numS3: string | null;

  @Column("nvarchar", { name: "NumS4", nullable: true, length: 50 })
  numS4: string | null;

  @Column("nvarchar", { name: "NumS5", nullable: true, length: 50 })
  numS5: string | null;

  @Column("nvarchar", { name: "NumS6", nullable: true, length: 50 })
  numS6: string | null;

  @Column("nvarchar", { name: "NumS7", nullable: true, length: 50 })
  numS7: string | null;

  @Column("nvarchar", { name: "NumS8", nullable: true, length: 50 })
  numS8: string | null;

  @Column("nvarchar", { name: "NumS9", nullable: true, length: 50 })
  numS9: string | null;

  @Column("nvarchar", { name: "NumS10", nullable: true, length: 50 })
  numS10: string | null;

  @Column("nvarchar", { name: "NumS11", nullable: true, length: 50 })
  numS11: string | null;

  @Column("bit", { name: "Material", nullable: true })
  material: boolean | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("bit", { name: "Digitado", nullable: true })
  digitado: boolean | null;

  @Column("bit", { name: "Falencia", nullable: true })
  falencia: boolean | null;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("bit", { name: "CD", nullable: true })
  cd: boolean | null;

  @Column("nvarchar", { name: "QRCode", nullable: true, length: 255 })
  qrCode: string | null;

  @Column("nvarchar", { name: "N_Selo", nullable: true, length: 50 })
  nSelo: string | null;

  @Column("nvarchar", { name: "Serie", nullable: true, length: 3 })
  serie: string | null;

  @Column("nvarchar", { name: "Cod_Seg", nullable: true, length: 50 })
  codSeg: string | null;

  @Column("float", { name: "Emolumento", nullable: true, precision: 53 })
  emolumento: number | null;

  @Column("float", { name: "FRJ", nullable: true, precision: 53 })
  frj: number | null;

  @Column("float", { name: "FRC", nullable: true, precision: 53 })
  frc: number | null;

  @Column("nvarchar", { name: "CodAto", nullable: true, length: 50 })
  codAto: string | null;

  @Column("nvarchar", { name: "NCod", nullable: true, length: 50 })
  nCod: string | null;

  @Column("float", { name: "txFRC", nullable: true, precision: 53 })
  txFrc: number | null;

  @Column("float", { name: "txFRJ", nullable: true, precision: 53 })
  txFrj: number | null;

  @Column("nvarchar", { name: "Chave", nullable: true, length: 200 })
  chave: string | null;

  @Column("bit", { name: "MarcaCenprot", nullable: true })
  marcaCenprot: boolean | null;
}
