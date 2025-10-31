import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IX_tblSeloDigital", ["codigo"], {})
@Index("IX_tblSeloDigital_1", ["usado"], {})
@Index("PK_tblSeloDigital", ["idSelo"], { unique: true })
@Entity("tblSeloDigital", { schema: "dbo" })
export class TblSeloDigital {
  @PrimaryGeneratedColumn({ type: "int", name: "IdSelo" })
  idSelo: number;

  @Column("nvarchar", { name: "Codigo", length: 50 })
  codigo: string;

  @Column("nvarchar", { name: "Serie", length: 1 })
  serie: string;

  @Column("nvarchar", { name: "Tipo", length: 3 })
  tipo: string;

  @Column("nvarchar", { name: "CodSeguranca", length: 50 })
  codSeguranca: string;

  @Column("bit", { name: "Usado" })
  usado: boolean;

  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @Column("nvarchar", { name: "Documento", nullable: true, length: 50 })
  documento: string | null;

  @Column("int", { name: "Ato", nullable: true })
  ato: number | null;

  @Column("bit", { name: "Postecipado", nullable: true })
  postecipado: boolean | null;

  @Column("date", { name: "Data_Uso", nullable: true })
  dataUso: Date | null;

  @Column("date", { name: "Data_Uso1", nullable: true })
  dataUso1: Date | null;
}
