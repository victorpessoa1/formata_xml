import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblControle_Initima", ["id"], { unique: true })
@Entity("tblControle_Intima", { schema: "dbo" })
export class TblControleIntima {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @Column("datetime", { name: "Data_Apresenta", nullable: true })
  dataApresenta: Date | null;

  @Column("datetime", { name: "Data_Intimacao", nullable: true })
  dataIntimacao: Date | null;

  @Column("datetime", { name: "Data_Boleto", nullable: true })
  dataBoleto: Date | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("float", { name: "Valor_Boleto", nullable: true, precision: 53 })
  valorBoleto: number | null;

  @Column("nvarchar", { name: "Caminho_Selo", nullable: true })
  caminhoSelo: string | null;
}
