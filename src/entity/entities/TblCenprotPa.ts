import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblCENPROT_Pa", ["idRetorno"], { unique: true })
@Entity("tblCENPROT_Pa", { schema: "dbo" })
export class TblCenprotPa {
  @PrimaryGeneratedColumn({ type: "int", name: "idRetorno" })
  idRetorno: number;

  @Column("nvarchar", { name: "Apresentante", nullable: true, length: 80 })
  apresentante: string | null;

  @Column("nvarchar", { name: "Ag_CodCedente", nullable: true, length: 50 })
  agCodCedente: string | null;

  @Column("nvarchar", { name: "Nosso_Num", nullable: true, length: 50 })
  nossoNum: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @Column("nvarchar", { name: "Tipo_Ocorrencia", nullable: true, length: 50 })
  tipoOcorrencia: string | null;

  @Column("datetime", { name: "Data_Apresenta", nullable: true })
  dataApresenta: Date | null;

  @Column("float", { name: "Custas", nullable: true, precision: 53 })
  custas: number | null;

  @Column("datetime", { name: "Data_Ocorrencia", nullable: true })
  dataOcorrencia: Date | null;

  @Column("datetime", { name: "Data_Remessa", nullable: true })
  dataRemessa: Date | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 80 })
  devedor: string | null;

  @Column("nvarchar", { name: "Num_devedor", nullable: true, length: 50 })
  numDevedor: string | null;
}
