import { Column, Entity } from "typeorm";

@Entity("Info_Tribunal", { schema: "dbo" })
export class InfoTribunal {
  @Column("datetime", { name: "Data", nullable: true })
  data: Date | null;

  @Column("nvarchar", { name: "nCodigo", nullable: true, length: 50 })
  nCodigo: string | null;

  @Column("nvarchar", { name: "Selo", nullable: true, length: 50 })
  selo: string | null;

  @Column("nvarchar", { name: "Serie", nullable: true, length: 50 })
  serie: string | null;

  @Column("nvarchar", { name: "Valor", nullable: true, length: 50 })
  valor: string | null;
}
