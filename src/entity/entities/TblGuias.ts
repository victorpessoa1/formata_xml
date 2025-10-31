import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IX_tblGuias", ["protocolo"], { unique: true })
@Index("IX_tblGuias_1", ["nGuia"], {})
@Index("IX_tblGuias_2", ["baixado"], {})
@Index("IX_tblGuias_3", ["usuario"], {})
@Index("PK_tblLoteComplementar", ["id"], { unique: true })
@Entity("tblGuias", { schema: "dbo" })
export class TblGuias {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "N_Guia", nullable: true })
  nGuia: number | null;

  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

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
}
