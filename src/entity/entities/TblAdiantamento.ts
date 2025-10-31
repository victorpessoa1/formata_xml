import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblAdiantamento", ["idAdiantamento"], { unique: true })
@Entity("tblAdiantamento", { schema: "dbo" })
export class TblAdiantamento {
  @PrimaryGeneratedColumn({ type: "int", name: "idAdiantamento" })
  idAdiantamento: number;

  @Column("int", { name: "Protocolo_Cartorio", nullable: true })
  protocoloCartorio: number | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 50 })
  devedor: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 50 })
  sacador: string | null;

  @Column("nvarchar", { name: "Cedente", nullable: true, length: 50 })
  cedente: string | null;

  @Column("float", { name: "Adiantamento", nullable: true, precision: 53 })
  adiantamento: number | null;

  @Column("bit", { name: "Baixa", nullable: true })
  baixa: boolean | null;

  @Column("datetime", { name: "DataPagamento", nullable: true })
  dataPagamento: Date | null;

  @Column("datetime", { name: "Data_Cancelado", nullable: true })
  dataCancelado: Date | null;

  @Column("datetime", { name: "Data_Retirada", nullable: true })
  dataRetirada: Date | null;

  @Column("datetime", { name: "Data_Entrada", nullable: true })
  dataEntrada: Date | null;

  @Column("datetime", { name: "Data_Devolvido", nullable: true })
  dataDevolvido: Date | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;
}
