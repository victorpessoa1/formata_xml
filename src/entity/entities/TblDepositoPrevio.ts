import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDepositoPrevio", ["id"], { unique: true })
@Entity("tblDepositoPrevio", { schema: "dbo" })
export class TblDepositoPrevio {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", { name: "Data" })
  data: Date;

  @Column("float", { name: "ValorDoc", precision: 53 })
  valorDoc: number;

  @Column("nvarchar", { name: "NDoc", nullable: true, length: 20 })
  nDoc: string | null;

  @Column("float", { name: "Adiantamento", precision: 53 })
  adiantamento: number;

  @Column("nvarchar", { name: "Devedor", length: 50 })
  devedor: string;

  @Column("nvarchar", { name: "Recibo", length: 50 })
  recibo: string;

  @Column("nvarchar", { name: "Protocolo", nullable: true, length: 50 })
  protocolo: string | null;

  @Column("bit", { name: "Restituicao", nullable: true })
  restituicao: boolean | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("datetime", { name: "Data_Protestado", nullable: true })
  dataProtestado: Date | null;

  @Column("datetime", { name: "Data_Baixa", nullable: true })
  dataBaixa: Date | null;
}
