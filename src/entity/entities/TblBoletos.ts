import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblBoletos", ["idBoleto"], { unique: true })
@Entity("tblBoletos", { schema: "dbo" })
export class TblBoletos {
  @PrimaryGeneratedColumn({ type: "int", name: "idBoleto" })
  idBoleto: number;

  @Column("nvarchar", { name: "NossoNumero", nullable: true, length: 50 })
  nossoNumero: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("nvarchar", { name: "DataDoc", nullable: true, length: 50 })
  dataDoc: string | null;

  @Column("int", { name: "NumDoc", nullable: true })
  numDoc: number | null;

  @Column("nvarchar", { name: "Valor", nullable: true, length: 50 })
  valor: string | null;

  @Column("nvarchar", { name: "Pagador", nullable: true, length: 200 })
  pagador: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 50 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Aceite", nullable: true, length: 50 })
  aceite: string | null;

  @Column("nvarchar", { name: "DataMovto", nullable: true, length: 50 })
  dataMovto: string | null;

  @Column("nvarchar", { name: "DataOper", nullable: true, length: 50 })
  dataOper: string | null;

  @Column("nvarchar", { name: "Endereco", nullable: true, length: 200 })
  endereco: string | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 200 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "CodBarras", nullable: true, length: 50 })
  codBarras: string | null;

  @Column("nvarchar", { name: "Linha", nullable: true, length: 50 })
  linha: string | null;

  @Column("nvarchar", { name: "Custas", nullable: true, length: 50 })
  custas: string | null;

  @Column("nvarchar", { name: "Selo", nullable: true, length: 50 })
  selo: string | null;

  @Column("nvarchar", { name: "Total", nullable: true, length: 50 })
  total: string | null;

  @Column("nvarchar", { name: "CEP", nullable: true, length: 50 })
  cep: string | null;

  @Column("nvarchar", { name: "Cidade", nullable: true, length: 50 })
  cidade: string | null;

  @Column("nvarchar", { name: "UF", nullable: true, length: 50 })
  uf: string | null;

  @Column("nvarchar", { name: "TipoDoc", nullable: true, length: 50 })
  tipoDoc: string | null;

  @Column("nvarchar", { name: "Bairro", nullable: true, length: 50 })
  bairro: string | null;

  @Column("nvarchar", { name: "Juros", nullable: true, length: 50 })
  juros: string | null;

  @Column("nvarchar", { name: "Safra", nullable: true, length: 50 })
  safra: string | null;

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

  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @Column("nvarchar", { name: "tJuros", nullable: true, length: 50 })
  tJuros: string | null;

  @Column("nvarchar", { name: "Pagar", nullable: true, length: 50 })
  pagar: string | null;

  @Column("nvarchar", { name: "tVenc", nullable: true, length: 50 })
  tVenc: string | null;

  @Column("nvarchar", { name: "Apresentante", nullable: true, length: 200 })
  apresentante: string | null;

  @Column("nvarchar", { name: "Cedente", nullable: true, length: 200 })
  cedente: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 200 })
  sacador: string | null;

  @Column("nvarchar", { name: "Valor_Principal", nullable: true, length: 50 })
  valorPrincipal: string | null;

  @Column("nvarchar", { name: "Origem", nullable: true, length: 50 })
  origem: string | null;

  @Column("nvarchar", { name: "Apontamento", nullable: true, length: 50 })
  apontamento: string | null;

  @Column("nvarchar", { name: "CPD", nullable: true, length: 50 })
  cpd: string | null;

  @Column("nvarchar", { name: "Distribuidor", nullable: true, length: 50 })
  distribuidor: string | null;

  @Column("nvarchar", { name: "CancAponta", nullable: true, length: 50 })
  cancAponta: string | null;

  @Column("nvarchar", { name: "Intimacao", nullable: true, length: 50 })
  intimacao: string | null;

  @Column("nvarchar", { name: "TaxaSafra", nullable: true, length: 50 })
  taxaSafra: string | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 50 })
  numTitulo: string | null;

  @Column("nvarchar", { name: "Especie", nullable: true, length: 50 })
  especie: string | null;

  @Column("nvarchar", { name: "Juros_Dia", nullable: true, length: 50 })
  jurosDia: string | null;

  @Column("nvarchar", { name: "Texto", nullable: true })
  texto: string | null;

  @Column("float", { name: "vlrCustasProt", nullable: true, precision: 53 })
  vlrCustasProt: number | null;

  @Column("float", { name: "vlrCancela", nullable: true, precision: 53 })
  vlrCancela: number | null;

  @Column("nvarchar", { name: "Condicao", nullable: true, length: 50 })
  condicao: string | null;

  @Column("float", { name: "ISS", nullable: true, precision: 53 })
  iss: number | null;
}
