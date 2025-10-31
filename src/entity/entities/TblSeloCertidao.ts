import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblSeloCertidao", ["idSelos"], { unique: true })
@Entity("tblSeloCertidao", { schema: "dbo" })
export class TblSeloCertidao {
  @Column("numeric", { name: "SeloCertidao", precision: 18, scale: 0 })
  seloCertidao: number;

  @Column("bit", { name: "Usado" })
  usado: boolean;

  @PrimaryGeneratedColumn({ type: "int", name: "IdSelos" })
  idSelos: number;

  @Column("nvarchar", { name: "Serie", length: 1 })
  serie: string;
}
