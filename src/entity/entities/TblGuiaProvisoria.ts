import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IX_tblGuiaProvisoria", ["protocolo"], { unique: true })
@Index("IX_tblGuiaProvisoria_1", ["usuario"], {})
@Index("PK_tblGuiaProvisoria", ["id"], { unique: true })
@Entity("tblGuiaProvisoria", { schema: "dbo" })
export class TblGuiaProvisoria {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "N_Guia", nullable: true })
  nGuia: number | null;

  @Column("int", { name: "Protocolo" })
  protocolo: number;

  @Column("datetime", { name: "DataEntrada", nullable: true })
  dataEntrada: Date | null;

  @Column("nvarchar", { name: "Ocorrencia", nullable: true, length: 20 })
  ocorrencia: string | null;

  @Column("nvarchar", { name: "Usuario", nullable: true, length: 50 })
  usuario: string | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 50 })
  devedor: string | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 18 })
  numDevedor: string | null;

  @Column("bit", { name: "Baixado", nullable: true })
  baixado: boolean | null;

  @Column("nvarchar", { name: "Tipo_Baixa", nullable: true, length: 50 })
  tipoBaixa: string | null;

  @Column("float", { name: "Pagar", nullable: true, precision: 53 })
  pagar: number | null;

  @Column("bit", { name: "Marca", nullable: true })
  marca: boolean | null;

  @Column("float", { name: "Custas", nullable: true, precision: 53 })
  custas: number | null;

  @Column("float", { name: "Selo", nullable: true, precision: 53 })
  selo: number | null;

  @Column("float", { name: "Valor_Titulo", nullable: true, precision: 53 })
  valorTitulo: number | null;

  @Column("float", { name: "Ato1", nullable: true, precision: 53 })
  ato1: number | null;

  @Column("float", { name: "Ato2", nullable: true, precision: 53 })
  ato2: number | null;

  @Column("float", { name: "Ato3", nullable: true, precision: 53 })
  ato3: number | null;

  @Column("float", { name: "Ato4", nullable: true, precision: 53 })
  ato4: number | null;

  @Column("float", { name: "Ato5", nullable: true, precision: 53 })
  ato5: number | null;

  @Column("float", { name: "Ato6", nullable: true, precision: 53 })
  ato6: number | null;

  @Column("float", { name: "Ato7", nullable: true, precision: 53 })
  ato7: number | null;

  @Column("float", { name: "Ato8", nullable: true, precision: 53 })
  ato8: number | null;

  @Column("float", { name: "Ato9", nullable: true, precision: 53 })
  ato9: number | null;

  @Column("float", { name: "Ato10", nullable: true, precision: 53 })
  ato10: number | null;
}
