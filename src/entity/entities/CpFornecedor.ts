import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_cpFornecedor", ["idFornecedor"], { unique: true })
@Entity("cpFornecedor", { schema: "dbo" })
export class CpFornecedor {
  @PrimaryGeneratedColumn({ type: "int", name: "idFornecedor" })
  idFornecedor: number;

  @Column("nvarchar", { name: "Nome", length: 100 })
  nome: string;

  @Column("nvarchar", { name: "Endereco", nullable: true, length: 1000 })
  endereco: string | null;

  @Column("nvarchar", { name: "Bairro", nullable: true, length: 50 })
  bairro: string | null;

  @Column("nvarchar", { name: "CEP", nullable: true, length: 50 })
  cep: string | null;

  @Column("nvarchar", { name: "Cidade", nullable: true, length: 50 })
  cidade: string | null;

  @Column("nvarchar", { name: "UF", nullable: true, length: 2 })
  uf: string | null;

  @Column("nchar", { name: "Documento", nullable: true, length: 14 })
  documento: string | null;

  @Column("nchar", { name: "Telefone", nullable: true, length: 14 })
  telefone: string | null;
}
