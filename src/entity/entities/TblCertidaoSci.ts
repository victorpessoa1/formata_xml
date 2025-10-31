import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblCertidaoSCI", ["id"], { unique: true })
@Entity("tblCertidaoSCI", { schema: "dbo" })
export class TblCertidaoSci {
  @Column("nvarchar", { name: "Nome_Certidao", nullable: true, length: 50 })
  nomeCertidao: string | null;

  @Column("nvarchar", { name: "Doc_Certidao", nullable: true, length: 14 })
  docCertidao: string | null;

  @Column("nvarchar", { name: "Tipo_Certidao", nullable: true, length: 50 })
  tipoCertidao: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;
}
