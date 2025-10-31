import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblRetornoBanco", ["idTabela"], { unique: true })
@Entity("tblRetornoBanco", { schema: "dbo" })
export class TblRetornoBanco {
  @PrimaryGeneratedColumn({ type: "int", name: "idTabela" })
  idTabela: number;

  @Column("int", { name: "Protocolo" })
  protocolo: number;

  @Column("float", { name: "ValorPago", nullable: true, precision: 53 })
  valorPago: number | null;

  @Column("nvarchar", { name: "Data_Ocorrencia", nullable: true, length: 50 })
  dataOcorrencia: string | null;

  @Column("nvarchar", { name: "Nome_Arq_Retorno", nullable: true, length: 50 })
  nomeArqRetorno: string | null;

  @Column("nvarchar", { name: "Cod_Rejeicao", nullable: true, length: 50 })
  codRejeicao: string | null;

  @Column("nvarchar", { name: "Cod_Liquidacao", nullable: true, length: 50 })
  codLiquidacao: string | null;

  @Column("int", { name: "Cod_Ocorrencia", nullable: true })
  codOcorrencia: number | null;

  @Column("nvarchar", { name: "Cod_Entrada", nullable: true, length: 50 })
  codEntrada: string | null;
}
