import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblSacador1", ["idSacador"], { unique: true })
@Entity("tblSacador", { schema: "dbo" })
export class TblSacador {
  @PrimaryGeneratedColumn({ type: "int", name: "id_Sacador" })
  idSacador: number;

  @Column("nvarchar", { name: "Doc_Sacador", nullable: true, length: 14 })
  docSacador: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 45 })
  sacador: string | null;

  @Column("nvarchar", { name: "End_Sacador", nullable: true, length: 45 })
  endSacador: string | null;

  @Column("nvarchar", { name: "Cep_Sacador", nullable: true, length: 45 })
  cepSacador: string | null;

  @Column("nvarchar", { name: "Cidade_Sacador", nullable: true, length: 20 })
  cidadeSacador: string | null;

  @Column("nvarchar", { name: "Uf_Sacador", nullable: true, length: 2 })
  ufSacador: string | null;

  @Column("nvarchar", { name: "Bairro", nullable: true, length: 20 })
  bairro: string | null;

  @Column("nvarchar", { name: "Tipo", nullable: true, length: 50 })
  tipo: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;
}
