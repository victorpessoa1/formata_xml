import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblSerasaBV", ["id"], { unique: true })
@Entity("tblSerasaBV", { schema: "dbo" })
export class TblSerasaBv {
  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 50 })
  numTitulo: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 50 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Endosso", nullable: true, length: 50 })
  endosso: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "Origem", nullable: true, length: 50 })
  origem: string | null;

  @Column("datetime", { name: "Data_Apresenta", nullable: true })
  dataApresenta: Date | null;

  @Column("datetime", { name: "Data_Protestado", nullable: true })
  dataProtestado: Date | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 200 })
  devedor: string | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 50 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 200 })
  portador: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 200 })
  sacador: string | null;

  @Column("nvarchar", { name: "Doc_Sacador", nullable: true, length: 50 })
  docSacador: string | null;

  @Column("datetime", { name: "Data_Cancelado", nullable: true })
  dataCancelado: Date | null;

  @Column("int", { name: "Protocolo_Cartorio", nullable: true })
  protocoloCartorio: number | null;

  @Column("int", { name: "idAvalista", nullable: true })
  idAvalista: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("nvarchar", { name: "Chave", nullable: true, length: 200 })
  chave: string | null;

  @Column("int", { name: "Remessa", nullable: true })
  remessa: number | null;

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

  @Column("float", { name: "Valor_Transacao", nullable: true, precision: 53 })
  valorTransacao: number | null;
}
