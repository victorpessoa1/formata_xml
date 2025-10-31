import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblGerencia", ["id"], { unique: true })
@Entity("tblGerencia", { schema: "dbo" })
export class TblGerencia {
  @Column("float", { name: "Protestados", nullable: true, precision: 53 })
  protestados: number | null;

  @Column("float", { name: "Retirados", nullable: true, precision: 53 })
  retirados: number | null;

  @Column("float", { name: "Cancelados", nullable: true, precision: 53 })
  cancelados: number | null;

  @Column("float", { name: "SerasaProt", nullable: true, precision: 53 })
  serasaProt: number | null;

  @Column("float", { name: "SerasaCanc", nullable: true, precision: 53 })
  serasaCanc: number | null;

  @Column("float", { name: "Comunica", nullable: true, precision: 53 })
  comunica: number | null;

  @Column("float", { name: "Pagamentos", nullable: true, precision: 53 })
  pagamentos: number | null;

  @Column("float", { name: "Certidoes", nullable: true, precision: 53 })
  certidoes: number | null;

  @Column("float", { name: "InstProt2V", nullable: true, precision: 53 })
  instProt2V: number | null;

  @Column("float", { name: "Particulares", nullable: true, precision: 53 })
  particulares: number | null;

  @Column("float", { name: "CanceladosGeral", nullable: true, precision: 53 })
  canceladosGeral: number | null;

  @Column("float", { name: "RetiradosPart", nullable: true, precision: 53 })
  retiradosPart: number | null;

  @Column("float", { name: "CustasProtesto", nullable: true, precision: 53 })
  custasProtesto: number | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;
}
