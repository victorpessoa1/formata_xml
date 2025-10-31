import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblSerasaSCI", ["id"], { unique: true })
@Entity("tblSerasaSCI", { schema: "dbo" })
export class TblSerasaSci {
  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 50 })
  numTitulo: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 50 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Endosso", nullable: true, length: 50 })
  endosso: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "Origem", nullable: true, length: 50 })
  origem: string | null;

  @Column("datetime", { name: "Data_Apresenta", nullable: true })
  dataApresenta: Date | null;

  @Column("datetime", { name: "Data_Protestado", nullable: true })
  dataProtestado: Date | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 50 })
  devedor: string | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 50 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 200 })
  portador: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 50 })
  sacador: string | null;

  @Column("nvarchar", { name: "Doc_Sacador", nullable: true, length: 50 })
  docSacador: string | null;

  @Column("datetime", { name: "Data_Cancelado", nullable: true })
  dataCancelado: Date | null;

  @Column("int", { name: "Protocolo_Cartorio", nullable: true })
  protocoloCartorio: number | null;

  @Column("int", { name: "idAvalista", nullable: true })
  idAvalista: number | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;
}
