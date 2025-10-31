import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblSeloGeral", ["idSelos"], { unique: true })
@Entity("tblSeloGeral", { schema: "dbo" })
export class TblSeloGeral {
  @Column("numeric", { name: "SeloGeral", precision: 18, scale: 0 })
  seloGeral: number;

  @Column("bit", { name: "Usado" })
  usado: boolean;

  @PrimaryGeneratedColumn({ type: "int", name: "IdSelos" })
  idSelos: number;

  @Column("nvarchar", { name: "Serie", length: 1 })
  serie: string;
}
