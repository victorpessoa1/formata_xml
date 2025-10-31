import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblEstorno", ["id"], { unique: true })
@Entity("tblEstorno", { schema: "dbo" })
export class TblEstorno {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 50 })
  devedor: string | null;

  @Column("nvarchar", { name: "Num_Devedor", nullable: true, length: 50 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 50 })
  numTitulo: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("datetime", { name: "Data_Ocorrencia", nullable: true })
  dataOcorrencia: Date | null;

  @Column("datetime", { name: "Data_Estorno", nullable: true })
  dataEstorno: Date | null;

  @Column("nvarchar", { name: "Tipo_Ocorrencia", nullable: true, length: 50 })
  tipoOcorrencia: string | null;

  @Column("nvarchar", { name: "Apresentante", nullable: true, length: 50 })
  apresentante: string | null;

  @Column("nvarchar", { name: "Usuario", nullable: true, length: 50 })
  usuario: string | null;
}
