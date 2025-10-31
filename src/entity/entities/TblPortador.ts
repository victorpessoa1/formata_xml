import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblPortador1", ["idPortador"], { unique: true })
@Entity("tblPortador", { schema: "dbo" })
export class TblPortador {
  @PrimaryGeneratedColumn({ type: "int", name: "Id_Portador" })
  idPortador: number;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 50 })
  portador: string | null;

  @Column("nvarchar", { name: "Identificacao", nullable: true, length: 50 })
  identificacao: string | null;

  @Column("nvarchar", { name: "Endereco", nullable: true, length: 50 })
  endereco: string | null;

  @Column("nvarchar", { name: "Bairro", nullable: true, length: 50 })
  bairro: string | null;

  @Column("nvarchar", { name: "CEP", nullable: true, length: 50 })
  cep: string | null;

  @Column("nvarchar", { name: "Cidade", nullable: true, length: 50 })
  cidade: string | null;

  @Column("nvarchar", { name: "UF", nullable: true, length: 2 })
  uf: string | null;

  @Column("nvarchar", { name: "Tipo_Doc", nullable: true, length: 50 })
  tipoDoc: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;
}
