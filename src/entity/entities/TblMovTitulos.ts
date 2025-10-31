import { Column, Entity, Index } from "typeorm";

@Index("PK_tblMov_Titulos", ["movTitulos"], { unique: true })
@Entity("tblMov_Titulos", { schema: "dbo" })
export class TblMovTitulos {
  @Column("nvarchar", { primary: true, name: "Mov_Titulos", length: 20 })
  movTitulos: string;

  @Column("datetime", { name: "Data_Entrada", nullable: true })
  dataEntrada: Date | null;

  @Column("nvarchar", { name: "Usuario", nullable: true, length: 50 })
  usuario: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;
}
