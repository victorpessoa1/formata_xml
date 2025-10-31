import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblBordero", ["id"], { unique: true })
@Entity("tblBordero", { schema: "dbo" })
export class TblBordero {
  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 50 })
  numTitulo: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 50 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("datetime", { name: "Data_Apresenta", nullable: true })
  dataApresenta: Date | null;

  @Column("nvarchar", { name: "Origem", nullable: true, length: 50 })
  origem: string | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("float", { name: "Custas", nullable: true, precision: 53 })
  custas: number | null;

  @Column("float", { name: "Selo", nullable: true, precision: 53 })
  selo: number | null;

  @Column("float", { name: "Distrib", nullable: true, precision: 53 })
  distrib: number | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 50 })
  devedor: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 50 })
  sacador: string | null;

  @Column("nvarchar", { name: "Nosso_Num", nullable: true, length: 50 })
  nossoNum: string | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 200 })
  portador: string | null;

  @Column("float", { name: "Adiantamento", nullable: true, precision: 53 })
  adiantamento: number | null;

  @Column("float", { name: "Valor_Juros", nullable: true, precision: 53 })
  valorJuros: number | null;

  @Column("float", { name: "Valor_Mora", nullable: true, precision: 53 })
  valorMora: number | null;

  @Column("float", { name: "V_Multa", nullable: true, precision: 53 })
  vMulta: number | null;

  @Column("int", { name: "Livro", nullable: true })
  livro: number | null;

  @Column("int", { name: "Folha", nullable: true })
  folha: number | null;

  @Column("int", { name: "Titulo", nullable: true })
  titulo: number | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("nchar", { name: "Num_Devedor", nullable: true, length: 18 })
  numDevedor: string | null;

  @Column("float", { name: "FRJ", nullable: true, precision: 53 })
  frj: number | null;

  @Column("float", { name: "FRC", nullable: true, precision: 53 })
  frc: number | null;

  @Column("nvarchar", { name: "ProtocoloDist", nullable: true, length: 50 })
  protocoloDist: string | null;

  @Column("float", { name: "ISS", nullable: true, precision: 53 })
  iss: number | null;
}
