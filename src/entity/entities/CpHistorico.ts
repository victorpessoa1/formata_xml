import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_cpHistorico", ["idHistorico"], { unique: true })
@Entity("cpHistorico", { schema: "dbo" })
export class CpHistorico {
  @PrimaryGeneratedColumn({ type: "int", name: "idHistorico" })
  idHistorico: number;

  @Column("nvarchar", { name: "Conta", length: 50 })
  conta: string;

  @Column("nvarchar", { name: "Fornecedor", length: 1000 })
  fornecedor: string;

  @Column("nvarchar", { name: "Descricao" })
  descricao: string;

  @Column("nvarchar", { name: "TipoDoc", length: 50 })
  tipoDoc: string;

  @Column("float", { name: "Valor", precision: 53 })
  valor: number;

  @Column("datetime", { name: "DataLancamento" })
  dataLancamento: Date;

  @Column("datetime", { name: "DataVencimento" })
  dataVencimento: Date;

  @Column("datetime", { name: "DataLiquidacao", nullable: true })
  dataLiquidacao: Date | null;

  @Column("nvarchar", { name: "Banco", length: 50 })
  banco: string;
}
