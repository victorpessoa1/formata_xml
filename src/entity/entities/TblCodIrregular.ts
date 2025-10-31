import { Column, Entity, Index } from "typeorm";

@Index("PK_tblCodIrregular1", ["codigo"], { unique: true })
@Entity("tblCodIrregular", { schema: "dbo" })
export class TblCodIrregular {
  @Column("nvarchar", { primary: true, name: "Codigo", length: 2 })
  codigo: string;

  @Column("nvarchar", { name: "Motivo", nullable: true, length: 255 })
  motivo: string | null;

  @Column("bit", { name: "Valido", nullable: true })
  valido: boolean | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;
}
