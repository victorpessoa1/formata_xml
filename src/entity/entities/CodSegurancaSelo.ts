import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_cod_seguranca_selo", ["id"], { unique: true })
@Entity("cod_seguranca_selo", { schema: "dbo" })
export class CodSegurancaSelo {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "codigo_selo", nullable: true, length: 50 })
  codigoSelo: string | null;

  @Column("nchar", { name: "tipo", nullable: true, length: 50 })
  tipo: string | null;

  @Column("nchar", { name: "serie", nullable: true, length: 50 })
  serie: string | null;

  @Column("nchar", { name: "codigo_seguranca", nullable: true, length: 50 })
  codigoSeguranca: string | null;

  @Column("nchar", { name: "nome_arquivo", nullable: true, length: 255 })
  nomeArquivo: string | null;
}
