import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_cpBanco", ["idBanco"], { unique: true })
@Entity("cpBanco", { schema: "dbo" })
export class CpBanco {
  @PrimaryGeneratedColumn({ type: "int", name: "idBanco" })
  idBanco: number;

  @Column("nvarchar", { name: "Banco", length: 50 })
  banco: string;

  @Column("nvarchar", { name: "Agencia", length: 50 })
  agencia: string;

  @Column("nvarchar", { name: "Conta", length: 50 })
  conta: string;
}
