import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblSaldoSelo", ["id"], { unique: true })
@Entity("tblSaldoSelo", { schema: "dbo" })
export class TblSaldoSelo {
  @Column("int", { name: "SeloGeral", nullable: true })
  seloGeral: number | null;

  @Column("int", { name: "SeloCertidao", nullable: true })
  seloCertidao: number | null;

  @Column("int", { name: "UltimoSeloGeral", nullable: true })
  ultimoSeloGeral: number | null;

  @Column("int", { name: "UltimoSeloCertidao", nullable: true })
  ultimoSeloCertidao: number | null;

  @Column("datetime", { name: "UltimaData", nullable: true })
  ultimaData: Date | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;
}
