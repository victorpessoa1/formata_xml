import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblBoletoCancela", ["id"], { unique: true })
@Entity("tblBoletoCancela", { schema: "dbo" })
export class TblBoletoCancela {
  @Column("nvarchar", { name: "Devedor", nullable: true, length: 50 })
  devedor: string | null;

  @Column("nvarchar", { name: "Endereco", nullable: true, length: 50 })
  endereco: string | null;

  @Column("nvarchar", { name: "Bairro", nullable: true, length: 50 })
  bairro: string | null;

  @Column("nvarchar", { name: "CEP", nullable: true, length: 50 })
  cep: string | null;

  @Column("nvarchar", { name: "Cidade", nullable: true, length: 50 })
  cidade: string | null;

  @Column("datetime", { name: "Entrada", nullable: true })
  entrada: Date | null;

  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
}
