import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tblCaixa", { schema: "dbo" })
export class TblCaixa {
  @PrimaryGeneratedColumn({ type: "int", name: "idCaixa" })
  idCaixa: number;

  @Column("int", { name: "Protocolo_Cartorio", nullable: true })
  protocoloCartorio: number | null;

  @Column("int", { name: "CodAto", nullable: true })
  codAto: number | null;

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

  @Column("nvarchar", { name: "TipoSelo", nullable: true, length: 10 })
  tipoSelo: string | null;

  @Column("float", { name: "ISS", nullable: true, precision: 53 })
  iss: number | null;
}
