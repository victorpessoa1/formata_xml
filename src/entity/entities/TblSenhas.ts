import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblSenhas", ["codigo"], { unique: true })
@Entity("tblSenhas", { schema: "dbo" })
export class TblSenhas {
  @PrimaryGeneratedColumn({ type: "int", name: "Codigo" })
  codigo: number;

  @Column("nvarchar", { name: "Usuario", nullable: true, length: 50 })
  usuario: string | null;

  @Column("nvarchar", { name: "Senha", nullable: true, length: 50 })
  senha: string | null;

  @Column("bit", { name: "Controle", nullable: true, default: () => "(0)" })
  controle: boolean | null;

  @Column("bit", { name: "Admin", nullable: true, default: () => "(0)" })
  admin: boolean | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("bit", { name: "tlLancamento", nullable: true })
  tlLancamento: boolean | null;

  @Column("bit", { name: "tlAR", nullable: true })
  tlAr: boolean | null;

  @Column("bit", { name: "tlProtesto", nullable: true })
  tlProtesto: boolean | null;

  @Column("bit", { name: "tlCertidao", nullable: true })
  tlCertidao: boolean | null;

  @Column("bit", { name: "tlEdital", nullable: true })
  tlEdital: boolean | null;

  @Column("bit", { name: "tlIntimacao", nullable: true })
  tlIntimacao: boolean | null;

  @Column("bit", { name: "tlMovimento", nullable: true })
  tlMovimento: boolean | null;

  @Column("bit", { name: "tlConsultas", nullable: true })
  tlConsultas: boolean | null;

  @Column("bit", { name: "tlRelatorio", nullable: true })
  tlRelatorio: boolean | null;

  @Column("bit", { name: "tlCaixa", nullable: true })
  tlCaixa: boolean | null;

  @Column("bit", { name: "tlGerencia", nullable: true })
  tlGerencia: boolean | null;
}
