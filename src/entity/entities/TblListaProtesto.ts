import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblListaProtesto", ["id"], { unique: true })
@Entity("tblListaProtesto", { schema: "dbo" })
export class TblListaProtesto {
  @Column("nvarchar", { name: "Devedor", nullable: true, length: 250 })
  devedor: string | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 50 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "Data_Apresenta", nullable: true, length: 50 })
  dataApresenta: string | null;

  @Column("nvarchar", { name: "Apresentante", nullable: true, length: 250 })
  apresentante: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 250 })
  sacador: string | null;

  @Column("nvarchar", { name: "Cedente", nullable: true, length: 250 })
  cedente: string | null;

  @Column("nvarchar", { name: "Data_Protestado", nullable: true, length: 50 })
  dataProtestado: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 50 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Num_Tit", nullable: true, length: 50 })
  numTit: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("nvarchar", { name: "Endosso", nullable: true, length: 50 })
  endosso: string | null;

  @Column("nvarchar", { name: "Protocolo", nullable: true, length: 50 })
  protocolo: string | null;

  @Column("nvarchar", { name: "Livro", nullable: true, length: 50 })
  livro: string | null;

  @Column("nvarchar", { name: "Folha", nullable: true, length: 50 })
  folha: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;
}
