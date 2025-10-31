import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblCalculo", ["idCalculo"], { unique: true })
@Index("Protocolo", ["protocolo"], { unique: true })
@Entity("tblCalculo", { schema: "dbo" })
export class TblCalculo {
  @PrimaryGeneratedColumn({ type: "int", name: "idCalculo" })
  idCalculo: number;

  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @Column("nvarchar", { name: "Tipo_Ocorrencia", nullable: true, length: 50 })
  tipoOcorrencia: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("nvarchar", { name: "Devedor", nullable: true, length: 100 })
  devedor: string | null;

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

  @Column("nvarchar", { name: "Usuario", nullable: true, length: 50 })
  usuario: string | null;

  @Column("float", { name: "ISS", nullable: true, precision: 53 })
  iss: number | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 100 })
  sacador: string | null;
}
