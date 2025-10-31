import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblSelo_Usado", ["idSelo"], { unique: true })
@Entity("tblSelo_Usado", { schema: "dbo" })
export class TblSeloUsado {
  @PrimaryGeneratedColumn({ type: "int", name: "idSelo" })
  idSelo: number;

  @Column("int", { name: "Protocolo_Cartorio", nullable: true })
  protocoloCartorio: number | null;

  @Column("int", { name: "CodAto", nullable: true })
  codAto: number | null;

  @Column("nvarchar", { name: "N_Selo", nullable: true, length: 50 })
  nSelo: string | null;

  @Column("nvarchar", { name: "Serie", nullable: true, length: 3 })
  serie: string | null;

  @Column("nvarchar", { name: "Cod_Seg", nullable: true, length: 50 })
  codSeg: string | null;

  @Column("float", { name: "Emolumentos", nullable: true, precision: 53 })
  emolumentos: number | null;

  @Column("float", { name: "FRJ", nullable: true, precision: 53 })
  frj: number | null;

  @Column("float", { name: "FRC", nullable: true, precision: 53 })
  frc: number | null;

  @Column("nvarchar", { name: "Documento", nullable: true, length: 50 })
  documento: string | null;

  @Column("nvarchar", { name: "TipoSelo", nullable: true, length: 10 })
  tipoSelo: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("int", { name: "Livro", nullable: true })
  livro: number | null;

  @Column("int", { name: "Folha", nullable: true })
  folha: number | null;

  @Column("date", { name: "Data_Uso", nullable: true })
  dataUso: Date | null;

  @Column("nvarchar", { name: "Caminho_Selo", nullable: true })
  caminhoSelo: string | null;
}
