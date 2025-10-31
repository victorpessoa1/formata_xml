import { Column, Entity } from "typeorm";

@Entity("tblEntradaCDA", { schema: "dbo" })
export class TblEntradaCda {
  @Column("int", { name: "Protocolo_Cartorio" })
  protocoloCartorio: number;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 45 })
  devedor: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 3 })
  especieTit: string | null;
}
