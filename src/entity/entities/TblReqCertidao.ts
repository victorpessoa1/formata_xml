import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IX_tblReqCertidao", ["usuario"], {})
@Index("IX_tblReqCertidao_1", ["codigo"], {})
@Index("PK_tblReqCertidao1", ["idCertidao"], { unique: true })
@Entity("tblReqCertidao", { schema: "dbo" })
export class TblReqCertidao {
  @PrimaryGeneratedColumn({ type: "int", name: "idCertidao" })
  idCertidao: number;

  @Column("nvarchar", { name: "Codigo", nullable: true, length: 50 })
  codigo: string | null;

  @Column("nvarchar", { name: "Requerente", nullable: true, length: 200 })
  requerente: string | null;

  @Column("nvarchar", { name: "Nome", nullable: true, length: 200 })
  nome: string | null;

  @Column("nvarchar", { name: "Num_Doc", nullable: true, length: 50 })
  numDoc: string | null;

  @Column("datetime", { name: "Data_Req", nullable: true })
  dataReq: Date | null;

  @Column("nvarchar", { name: "Usuario", nullable: true, length: 50 })
  usuario: string | null;

  @Column("bit", { name: "Impresso", nullable: true })
  impresso: boolean | null;

  @Column("nvarchar", { name: "Nacionalidade", nullable: true, length: 50 })
  nacionalidade: string | null;

  @Column("nvarchar", { name: "EstCivil", nullable: true, length: 50 })
  estCivil: string | null;

  @Column("nvarchar", { name: "Profissao", nullable: true, length: 50 })
  profissao: string | null;

  @Column("nvarchar", { name: "Cidade", nullable: true, length: 50 })
  cidade: string | null;

  @Column("nvarchar", { name: "Bairro", nullable: true, length: 50 })
  bairro: string | null;

  @Column("nvarchar", { name: "CEP", nullable: true, length: 8 })
  cep: string | null;

  @Column("nvarchar", { name: "UF", nullable: true, length: 50 })
  uf: string | null;

  @Column("nvarchar", { name: "Identidade", nullable: true, length: 50 })
  identidade: string | null;

  @Column("nvarchar", { name: "Filiacao", nullable: true, length: 100 })
  filiacao: string | null;

  @Column("nvarchar", { name: "Endereco", nullable: true, length: 100 })
  endereco: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("bit", { name: "Gratuito", nullable: true })
  gratuito: boolean | null;

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

  @Column("nvarchar", { name: "tDate", nullable: true, length: 10 })
  tDate: string | null;

  @Column("nchar", { name: "TipoSelo", nullable: true, length: 10 })
  tipoSelo: string | null;

  @Column("float", { name: "Pagar", nullable: true, precision: 53 })
  pagar: number | null;

  @Column("bit", { name: "Digital", nullable: true })
  digital: boolean | null;

  @Column("bit", { name: "Pago", nullable: true })
  pago: boolean | null;

  @Column("bit", { name: "Especifica", nullable: true })
  especifica: boolean | null;

  @Column("bit", { name: "Cenprot", nullable: true })
  cenprot: boolean | null;
}
