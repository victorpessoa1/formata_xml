import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblCorregedoria", ["idSelo"], { unique: true })
@Entity("tblCorregedoria", { schema: "dbo" })
export class TblCorregedoria {
  @Column("nvarchar", { name: "N_Selo", nullable: true, length: 50 })
  nSelo: string | null;

  @Column("nvarchar", { name: "Serie", nullable: true, length: 50 })
  serie: string | null;

  @Column("nvarchar", { name: "Tipo", nullable: true, length: 50 })
  tipo: string | null;

  @Column("nvarchar", { name: "Protocolo", nullable: true, length: 50 })
  protocolo: string | null;

  @Column("nvarchar", { name: "Documento", nullable: true, length: 50 })
  documento: string | null;

  @Column("nvarchar", { name: "Ato", nullable: true, length: 50 })
  ato: string | null;

  @Column("nvarchar", { name: "Valor", nullable: true, length: 50 })
  valor: string | null;

  @Column("nvarchar", { name: "Emolumento", nullable: true, length: 50 })
  emolumento: string | null;

  @Column("nvarchar", { name: "FRJ", nullable: true, length: 50 })
  frj: string | null;

  @Column("nvarchar", { name: "FRC", nullable: true, length: 50 })
  frc: string | null;

  @Column("nvarchar", { name: "Livro", nullable: true, length: 50 })
  livro: string | null;

  @Column("nvarchar", { name: "Folha", nullable: true, length: 50 })
  folha: string | null;

  @Column("date", { name: "Data_uso", nullable: true })
  dataUso: Date | null;

  @PrimaryGeneratedColumn({ type: "int", name: "idSelo" })
  idSelo: number;
}
