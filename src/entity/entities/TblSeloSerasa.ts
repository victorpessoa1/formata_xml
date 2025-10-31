import { Column, Entity } from "typeorm";

@Entity("tblSeloSerasa", { schema: "dbo" })
export class TblSeloSerasa {
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
