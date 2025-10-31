import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_tblCertidao", ["id"], { unique: true })
@Entity("tblCertidao", { schema: "dbo" })
export class TblCertidao {
  @Column("nvarchar", { name: "Devedor", nullable: true, length: 200 })
  devedor: string | null;

  @Column("nvarchar", { name: "Tipo", nullable: true, length: 50 })
  tipo: string | null;

  @Column("nvarchar", { name: "Num_devedor", nullable: true, length: 50 })
  numDevedor: string | null;

  @Column("nvarchar", { name: "Vencimento", nullable: true, length: 50 })
  vencimento: string | null;

  @Column("float", { name: "Valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("float", { name: "Saldo", nullable: true, precision: 53 })
  saldo: number | null;

  @Column("nvarchar", { name: "Data_Apresenta", nullable: true, length: 50 })
  dataApresenta: string | null;

  @Column("nvarchar", { name: "Data_Protesto", nullable: true, length: 50 })
  dataProtesto: string | null;

  @Column("nvarchar", { name: "CodPortador", nullable: true, length: 200 })
  codPortador: string | null;

  @Column("nvarchar", { name: "Sacador", nullable: true, length: 255 })
  sacador: string | null;

  @Column("nvarchar", { name: "Especie_Tit", nullable: true, length: 50 })
  especieTit: string | null;

  @Column("nvarchar", { name: "Num_Titulo", nullable: true, length: 50 })
  numTitulo: string | null;

  @Column("int", { name: "Contador", nullable: true })
  contador: number | null;

  @Column("int", { name: "Livro", nullable: true })
  livro: number | null;

  @Column("int", { name: "Pagina", nullable: true })
  pagina: number | null;

  @Column("nvarchar", { name: "Portador", nullable: true, length: 200 })
  portador: string | null;

  @Column("nvarchar", { name: "Endosso", nullable: true, length: 50 })
  endosso: string | null;

  @Column("nvarchar", { name: "Cedente", nullable: true, length: 50 })
  cedente: string | null;

  @Column("nvarchar", { name: "Cidade", nullable: true, length: 50 })
  cidade: string | null;

  @Column("int", { name: "Tipo_Doc", nullable: true })
  tipoDoc: number | null;

  @Column("int", { name: "Protocolo", nullable: true })
  protocolo: number | null;

  @Column("nvarchar", { name: "Contraprotesto", nullable: true, length: 50 })
  contraprotesto: string | null;

  @Column("nvarchar", { name: "Codigo", nullable: true, length: 50 })
  codigo: string | null;

  @Column("uniqueidentifier", { name: "rowguid", default: () => "newid()" })
  rowguid: string;

  @Column("nvarchar", { name: "Nacionalidade", nullable: true, length: 50 })
  nacionalidade: string | null;

  @Column("nvarchar", { name: "EstCivil", nullable: true, length: 50 })
  estCivil: string | null;

  @Column("nvarchar", { name: "Identidade", nullable: true, length: 50 })
  identidade: string | null;

  @Column("nvarchar", { name: "Filiacao", nullable: true, length: 100 })
  filiacao: string | null;

  @Column("nvarchar", { name: "Endereco", nullable: true, length: 100 })
  endereco: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("nvarchar", { name: "QRCode", nullable: true, length: 255 })
  qrCode: string | null;

  @Column("nvarchar", { name: "N_Selo", nullable: true, length: 50 })
  nSelo: string | null;

  @Column("nvarchar", { name: "Serie", nullable: true, length: 3 })
  serie: string | null;

  @Column("nvarchar", { name: "Cod_Seg", nullable: true, length: 50 })
  codSeg: string | null;

  @Column("float", { name: "Emolumentos", nullable: true, precision: 53 })
  emolumentos: number | null;

  @Column("float", { name: "FRJ", nullable: true, precision: 53 })
  frj: number | null;

  @Column("float", { name: "FRC", nullable: true, precision: 53 })
  frc: number | null;

  @Column("nvarchar", { name: "NCod", nullable: true, length: 50 })
  nCod: string | null;

  @Column("nchar", { name: "TipoSelo", nullable: true, length: 10 })
  tipoSelo: string | null;

  @Column("nvarchar", { name: "Emissao", nullable: true, length: 50 })
  emissao: string | null;

  @Column("nvarchar", { name: "Bairro", nullable: true, length: 50 })
  bairro: string | null;

  @Column("nvarchar", { name: "CEP", nullable: true, length: 50 })
  cep: string | null;

  @Column("nvarchar", { name: "UF", nullable: true, length: 50 })
  uf: string | null;

  @Column("nvarchar", { name: "Usuario", nullable: true, length: 50 })
  usuario: string | null;
}
