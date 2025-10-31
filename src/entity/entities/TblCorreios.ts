import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblCorreios", ["id"], { unique: true })
@Entity("tblCorreios", { schema: "dbo" })
export class TblCorreios {
  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

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

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 3 })
  especieTit: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("bit", { name: "Marca", nullable: true })
  marca: boolean | null;
}
