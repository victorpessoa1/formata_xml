import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblCertidaoCopia", ["id"], { unique: true })
@Entity("tblCertidaoCopia", { schema: "dbo" })
export class TblCertidaoCopia {
  @Column("nvarchar", { name: "Devedor", nullable: true, length: 200 })
  devedor: string | null;

  @Column("nvarchar", { name: "Tipo", nullable: true, length: 50 })
  tipo: string | null;

  @Column("nvarchar", { name: "Num_devedor", nullable: true, length: 50 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "Data_Apresenta", nullable: true, length: 50 })
  dataApresenta: string | null;

  @Column("nvarchar", { name: "Data_Protesto", nullable: true, length: 50 })
  dataProtesto: string | null;

  @Column("nvarchar", { name: "CodPortador", nullable: true, length: 200 })
  codPortador: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 50 })
  sacador: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 50 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 50 })
  numTitulo: string | null;

  @Column("int", { name: "Contador", nullable: true })
  contador: number | null;

  @Column("int", { name: "Livro", nullable: true })
  livro: number | null;

  @Column("int", { name: "Pagina", nullable: true })
  pagina: number | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 200 })
  portador: string | null;

  @Column("nvarchar", { name: "Endosso", nullable: true, length: 50 })
  endosso: string | null;

  @Column("nvarchar", { name: "Cedente", nullable: true, length: 50 })
  cedente: string | null;

  @Column("nvarchar", { name: "Cidade", nullable: true, length: 50 })
  cidade: string | null;

  @Column("int", { name: "Tipo_Doc", nullable: true })
  tipoDoc: number | null;

  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @Column("nvarchar", { name: "Codigo", nullable: true, length: 8 })
  codigo: string | null;

  @Column("bit", { name: "Contraprotesto", nullable: true })
  contraprotesto: boolean | null;

  @Column("nvarchar", { name: "Data_Emissao", nullable: true, length: 50 })
  dataEmissao: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;
}
