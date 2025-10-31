import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IX_tblBanco", ["idBanco"], { unique: true })
@Index("PK_tblBanco", ["id"], { unique: true })
@Entity("tblBanco", { schema: "dbo" })
export class TblBanco {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "idBanco", length: 50 })
  idBanco: string;

  @Column("nvarchar", { name: "Nome_Banco", nullable: true, length: 200 })
  nomeBanco: string | null;

  @Column("int", { name: "CodNota", nullable: true })
  codNota: number | null;

  @Column("nvarchar", { name: "Documento", nullable: true, length: 50 })
  documento: string | null;

  @Column("bit", { name: "NaoDevolver", nullable: true })
  naoDevolver: boolean | null;

  @Column("bit", { name: "Cobranca", nullable: true })
  cobranca: boolean | null;
}
