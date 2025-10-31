import { Column, Entity, Index } from "typeorm";

@Index("PK_tblCodAp", ["codAp"], { unique: true })
@Entity("tblCodAp", { schema: "dbo" })
export class TblCodAp {
  @Column("nvarchar", { primary: true, name: "CodAp", length: 50 })
  codAp: string;
}
