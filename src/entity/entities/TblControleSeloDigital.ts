import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblControleSeloDigital", ["codigoPedido"], { unique: true })
@Entity("tblControleSeloDigital", { schema: "dbo" })
export class TblControleSeloDigital {
  @PrimaryGeneratedColumn({ type: "int", name: "idControle" })
  idControle: number;

  @Column("nchar", { name: "CodigoComarca", length: 10 })
  codigoComarca: string;

  @Column("nchar", { name: "CodigoCartorio", length: 10 })
  codigoCartorio: string;

  @Column("nchar", { primary: true, name: "CodigoPedido", length: 10 })
  codigoPedido: string;

  @Column("nchar", { name: "DataPedido", length: 10 })
  dataPedido: string;

  @Column("nchar", { name: "QuantidadeSelos", length: 10 })
  quantidadeSelos: string;
}
