import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblRelFinanceiro", ["id"], { unique: true })
@Entity("tblRelFinanceiro", { schema: "dbo" })
export class TblRelFinanceiro {
  @Column("nvarchar", { name: "Protocolo", nullable: true, length: 50 })
  protocolo: string | null;

  @Column("nvarchar", { name: "CodPortador", nullable: true, length: 50 })
  codPortador: string | null;

  @Column("nvarchar", { name: "nPortador", nullable: true, length: 200 })
  nPortador: string | null;

  @Column("float", { name: "Pagar", nullable: true, precision: 53 })
  pagar: number | null;

  @Column("float", { name: "Custas", nullable: true, precision: 53 })
  custas: number | null;

  @Column("nvarchar", { name: "Situacao", nullable: true, length: 50 })
  situacao: string | null;

  @Column("float", { name: "Recebido", nullable: true, precision: 53 })
  recebido: number | null;

  @Column("float", { name: "RecebidoCustas", nullable: true, precision: 53 })
  recebidoCustas: number | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;
}
