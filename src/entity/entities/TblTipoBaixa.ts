import { Column, Entity, Index } from "typeorm";

@Index("PK_tblTipoBaixa", ["tipoBaixa"], { unique: true })
@Entity("tblTipoBaixa", { schema: "dbo" })
export class TblTipoBaixa {
  @Column("nvarchar", { primary: true, name: "TipoBaixa", length: 1 })
  tipoBaixa: string;

  @Column("nvarchar", { name: "Descricao", nullable: true, length: 50 })
  descricao: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;
}
