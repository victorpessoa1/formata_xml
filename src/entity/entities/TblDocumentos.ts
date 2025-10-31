import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDocumentos", ["id"], { unique: true })
@Entity("tblDocumentos", { schema: "dbo" })
export class TblDocumentos {
  @Column("int", { name: "Protocolo_Cartorio", nullable: true })
  protocoloCartorio: number | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 50 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 50 })
  devedor: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("nvarchar", { name: "Falencia", nullable: true, length: 30 })
  falencia: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;
}
