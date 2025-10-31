import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblEdital", ["id"], { unique: true })
@Entity("tblEdital", { schema: "dbo" })
export class TblEdital {
  @Column("int", { name: "Protocolo_Cartorio", nullable: true })
  protocoloCartorio: number | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 255 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 255 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 255 })
  devedor: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 255 })
  sacador: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("nvarchar", { name: "CodPortador", nullable: true, length: 50 })
  codPortador: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("nvarchar", { name: "Apresentante", nullable: true, length: 200 })
  apresentante: string | null;

  @Column("nvarchar", { name: "Num_Devedor1", nullable: true, length: 18 })
  numDevedor1: string | null;

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
}
