import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDocOrdemJudicial", ["idDoc"], { unique: true })
@Entity("tblDocOrdemJudicial", { schema: "dbo" })
export class TblDocOrdemJudicial {
  @PrimaryGeneratedColumn({ type: "int", name: "idDoc" })
  idDoc: number;

  @Column("nvarchar", { name: "Protocolo", length: 50 })
  protocolo: string;

  @Column("nvarchar", { name: "Num_Devedor", length: 50 })
  numDevedor: string;

  @Column("nvarchar", { name: "Devedor", length: 50 })
  devedor: string;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;
}
