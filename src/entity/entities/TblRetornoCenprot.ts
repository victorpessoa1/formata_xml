import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblRetorno_CENPROT_1", ["idRet"], { unique: true })
@Entity("tblRetorno_CENPROT", { schema: "dbo" })
export class TblRetornoCenprot {
  @PrimaryGeneratedColumn({ type: "int", name: "idRet" })
  idRet: number;

  @Column("nvarchar", { name: "Lote", nullable: true, length: 50 })
  lote: string | null;

  @Column("nvarchar", { name: "Tipo", nullable: true, length: 50 })
  tipo: string | null;

  @Column("int", { name: "Qtde", nullable: true })
  qtde: number | null;

  @Column("datetime", { name: "Periodo", nullable: true })
  periodo: Date | null;

  @Column("datetime", { name: "Lavratura", nullable: true })
  lavratura: Date | null;

  @Column("datetime", { name: "Transmissao", nullable: true })
  transmissao: Date | null;

  @Column("int", { name: "Devolucao", nullable: true })
  devolucao: number | null;

  @Column("int", { name: "Retirados", nullable: true })
  retirados: number | null;

  @Column("int", { name: "Cancelados", nullable: true })
  cancelados: number | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("datetime", { name: "Notificacao", nullable: true })
  notificacao: Date | null;

  @Column("nvarchar", { name: "Hora", nullable: true, length: 50 })
  hora: string | null;
}
