import { Column, Entity } from "typeorm";

@Entity("Cancelados_Serasa", { schema: "dbo" })
export class CanceladosSerasa {
  @Column("datetime", { name: "Expr2" })
  expr2: Date;

  @Column("nvarchar", { name: "Expr3", nullable: true, length: 50 })
  expr3: string | null;

  @Column("nvarchar", { name: "Expr4", length: 50 })
  expr4: string;

  @Column("nvarchar", { name: "Expr5", length: 50 })
  expr5: string;

  @Column("nvarchar", { name: "Valor_Emol", length: 50 })
  valorEmol: string;
}
