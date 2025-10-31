import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblDevedor", ["idDevedor"], { unique: true })
@Entity("tblDevedor", { schema: "dbo" })
export class TblDevedor {
  @PrimaryGeneratedColumn({ type: "int", name: "idDevedor" })
  idDevedor: number;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 18 })
  numDevedor: string | null;

  @Column("int", { name: "Tipo_Doc", nullable: true })
  tipoDoc: number | null;

  @Column("nvarchar", { name: "Nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("nvarchar", { name: "Endereco", nullable: true, length: 50 })
  endereco: string | null;

  @Column("nvarchar", { name: "Bairro", nullable: true, length: 50 })
  bairro: string | null;

  @Column("nvarchar", { name: "CEP", nullable: true, length: 50 })
  cep: string | null;

  @Column("nvarchar", { name: "Cidade", nullable: true, length: 50 })
  cidade: string | null;

  @Column("nvarchar", { name: "UF", nullable: true, length: 50 })
  uf: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;
}
