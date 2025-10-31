import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_cpConta", ["idConta"], { unique: true })
@Entity("cpConta", { schema: "dbo" })
export class CpConta {
  @PrimaryGeneratedColumn({ type: "int", name: "idConta" })
  idConta: number;

  @Column("nvarchar", { name: "Nome", length: 100 })
  nome: string;
}
