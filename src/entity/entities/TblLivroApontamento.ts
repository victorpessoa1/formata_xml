import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblLivroApontamento", ["id"], { unique: true })
@Entity("tblLivroApontamento", { schema: "dbo" })
export class TblLivroApontamento {
  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 200 })
  portador: string | null;

  @Column("nvarchar", { name: "Origem", nullable: true, length: 50 })
  origem: string | null;

  @Column("nvarchar", { name: "Especie", nullable: true, length: 50 })
  especie: string | null;

  @Column("nvarchar", { name: "Emissao", nullable: true, length: 50 })
  emissao: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 50 })
  sacador: string | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 50 })
  devedor: string | null;

  @Column("int", { name: "apTitulo", nullable: true })
  apTitulo: number | null;

  @Column("int", { name: "apPagina", nullable: true })
  apPagina: number | null;

  @Column("int", { name: "apLivro", nullable: true })
  apLivro: number | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 50 })
  numTitulo: string | null;

  @Column("datetime", { name: "Data_Apresenta", nullable: true })
  dataApresenta: Date | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("nvarchar", { name: "QRCode", nullable: true, length: 255 })
  qrCode: string | null;

  @Column("nvarchar", { name: "N_Selo", nullable: true, length: 50 })
  nSelo: string | null;

  @Column("nvarchar", { name: "Serie", nullable: true, length: 3 })
  serie: string | null;

  @Column("nvarchar", { name: "Cod_Seg", nullable: true, length: 50 })
  codSeg: string | null;

  @Column("float", { name: "Emolumentos", nullable: true, precision: 53 })
  emolumentos: number | null;

  @Column("float", { name: "FRJ", nullable: true, precision: 53 })
  frj: number | null;

  @Column("float", { name: "FRC", nullable: true, precision: 53 })
  frc: number | null;

  @Column("nvarchar", { name: "NCod", nullable: true, length: 50 })
  nCod: string | null;
}
