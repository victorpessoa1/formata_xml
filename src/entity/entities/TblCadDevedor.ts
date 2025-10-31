import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblCadDevedor", ["idCadDevedor"], { unique: true })
@Entity("tblCadDevedor", { schema: "dbo" })
export class TblCadDevedor {
  @PrimaryGeneratedColumn({ type: "int", name: "idCadDevedor" })
  idCadDevedor: number;

  @Column("nvarchar", { name: "Doc_Sacador", length: 14 })
  docSacador: string;

  @Column("nvarchar", { name: "Sacador", length: 50 })
  sacador: string;

  @Column("bit", { name: "Valido" })
  valido: boolean;
}
