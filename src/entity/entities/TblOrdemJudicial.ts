import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblOrdemJudicial", ["idOrdem"], { unique: true })
@Entity("tblOrdemJudicial", { schema: "dbo" })
export class TblOrdemJudicial {
  @PrimaryGeneratedColumn({ type: "int", name: "idOrdem" })
  idOrdem: number;

  @Column("nvarchar", { name: "Num_Devedor", length: 50 })
  numDevedor: string;

  @Column("datetime", { name: "Data_OJ" })
  dataOj: Date;

  @Column("nvarchar", { name: "Devedor", length: 50 })
  devedor: string;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;
}
