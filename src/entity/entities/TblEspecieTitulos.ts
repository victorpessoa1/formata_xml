import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblEspecieTitulos", ["id"], { unique: true })
@Entity("tblEspecieTitulos", { schema: "dbo" })
export class TblEspecieTitulos {
  @Column("nvarchar", { name: "Especie", nullable: true, length: 3 })
  especie: string | null;

  @Column("nvarchar", { name: "Especificacao", nullable: true, length: 50 })
  especificacao: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "Codigo", nullable: true })
  codigo: number | null;
}
