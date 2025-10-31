import { Column, Entity } from "typeorm";

@Entity("Consulta", { schema: "dbo" })
export class Consulta {
  @Column("int", { name: "HisId" })
  hisId: number;

  @Column("int", { name: "His_TitId", nullable: true })
  hisTitId: number | null;

  @Column("int", { name: "His_OfiId", nullable: true })
  hisOfiId: number | null;

  @Column("int", { name: "His_SitId", nullable: true })
  hisSitId: number | null;

  @Column("datetime2", { name: "HisData", nullable: true })
  hisData: Date | null;

  @Column("bit", { name: "HisSemEfeito", nullable: true })
  hisSemEfeito: boolean | null;

  @Column("varchar", { name: "HisUsuario", nullable: true, length: 255 })
  hisUsuario: string | null;

  @Column("datetime2", { name: "HisDataRegistro", nullable: true })
  hisDataRegistro: Date | null;

  @Column("datetime2", { name: "HisDataAto", nullable: true })
  hisDataAto: Date | null;

  @Column("int", { name: "TitId" })
  titId: number;

  @Column("int", { name: "Tit_EspId", nullable: true })
  titEspId: number | null;

  @Column("int", { name: "Tit_NatId", nullable: true })
  titNatId: number | null;

  @Column("int", { name: "Tit_MoeId", nullable: true })
  titMoeId: number | null;

  @Column("int", { name: "Tit_AprId", nullable: true })
  titAprId: number | null;

  @Column("int", { name: "Tit_MdcId", nullable: true })
  titMdcId: number | null;

  @Column("int", { name: "Tit_SitId", nullable: true })
  titSitId: number | null;

  @Column("int", { name: "Tit_ArqId", nullable: true })
  titArqId: number | null;

  @Column("varchar", { name: "TitProtocolo", nullable: true, length: 20 })
  titProtocolo: string | null;

  @Column("varchar", {
    name: "TitProtocoloDistribuidor",
    nullable: true,
    length: 20,
  })
  titProtocoloDistribuidor: string | null;

  @Column("varchar", { name: "TitNumero", nullable: true, length: 25 })
  titNumero: string | null;

  @Column("datetime2", { name: "TitDataSituacao", nullable: true })
  titDataSituacao: Date | null;

  @Column("datetime2", { name: "TitDataApresentacao", nullable: true })
  titDataApresentacao: Date | null;

  @Column("varchar", { name: "TitPracaPagamento", nullable: true, length: 50 })
  titPracaPagamento: string | null;

  @Column("tinyint", { name: "TitTipoVencimento", nullable: true })
  titTipoVencimento: number | null;

  @Column("datetime2", { name: "TitDataVencimento", nullable: true })
  titDataVencimento: Date | null;

  @Column("int", { name: "TitDiasDaVista", nullable: true })
  titDiasDaVista: number | null;

  @Column("datetime2", { name: "TitDataParaPagamento", nullable: true })
  titDataParaPagamento: Date | null;

  @Column("decimal", {
    name: "TitSaldo",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  titSaldo: number | null;

  @Column("decimal", {
    name: "TitValor",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  titValor: number | null;

  @Column("datetime2", { name: "TitDataEmissao", nullable: true })
  titDataEmissao: Date | null;

  @Column("varchar", { name: "TitNossoNumero", nullable: true, length: 20 })
  titNossoNumero: string | null;

  @Column("bit", { name: "TitIndicacao", nullable: true })
  titIndicacao: boolean | null;

  @Column("bit", { name: "TitAssinaturaSacado", nullable: true })
  titAssinaturaSacado: boolean | null;

  @Column("bit", { name: "TitAssinaturaEmitente", nullable: true })
  titAssinaturaEmitente: boolean | null;

  @Column("bit", { name: "TitAssinaturaAvalista", nullable: true })
  titAssinaturaAvalista: boolean | null;

  @Column("bit", { name: "TitAssinaturaEndossante", nullable: true })
  titAssinaturaEndossante: boolean | null;

  @Column("tinyint", { name: "TitAceite", nullable: true })
  titAceite: number | null;

  @Column("varchar", { name: "TitEndosso", nullable: true, length: 1 })
  titEndosso: string | null;

  @Column("varchar", { name: "TitCodigoCedente", nullable: true, length: 40 })
  titCodigoCedente: string | null;

  @Column("varchar", { name: "TitDeclaracao", nullable: true, length: 1 })
  titDeclaracao: string | null;

  @Column("text", { name: "TitAlegacao", nullable: true })
  titAlegacao: string | null;

  @Column("text", { name: "TitComentario", nullable: true })
  titComentario: string | null;

  @Column("bit", { name: "TitFinsFalimentares", nullable: true })
  titFinsFalimentares: boolean | null;

  @Column("bit", { name: "TitAntigo", nullable: true })
  titAntigo: boolean | null;

  @Column("varchar", {
    name: "TitNumeroOperacaoBanco",
    nullable: true,
    length: 10,
  })
  titNumeroOperacaoBanco: string | null;

  @Column("varchar", {
    name: "TitNumeroContratoBanco",
    nullable: true,
    length: 35,
  })
  titNumeroContratoBanco: string | null;

  @Column("int", { name: "TitParcelaContrato", nullable: true })
  titParcelaContrato: number | null;

  @Column("bit", { name: "TitLetraCambio", nullable: true })
  titLetraCambio: boolean | null;

  @Column("text", { name: "TitTextoFalimentar", nullable: true })
  titTextoFalimentar: string | null;

  @Column("varchar", { name: "TitCartorioOrigem", nullable: true, length: 255 })
  titCartorioOrigem: string | null;

  @Column("int", { name: "TitBeneficiario", nullable: true })
  titBeneficiario: number | null;

  @Column("varchar", { name: "TitProcesso", nullable: true, length: 255 })
  titProcesso: string | null;

  @Column("bit", { name: "TitManual", nullable: true })
  titManual: boolean | null;

  @Column("bit", { name: "TitManualDistribuidor", nullable: true })
  titManualDistribuidor: boolean | null;

  @Column("int", { name: "Tit_CrpId", nullable: true })
  titCrpId: number | null;

  @Column("bit", { name: "TitEditalDireto", nullable: true })
  titEditalDireto: boolean | null;

  @Column("bit", { name: "TitInstrumentoImpresso", nullable: true })
  titInstrumentoImpresso: boolean | null;

  @Column("bit", { name: "TitAceiteProcessado", nullable: true })
  titAceiteProcessado: boolean | null;

  @Column("int", { name: "Tit_LvpId", nullable: true })
  titLvpId: number | null;

  @Column("bit", { name: "TitPreRetirado", nullable: true })
  titPreRetirado: boolean | null;

  @Column("int", { name: "Tit_ApcId", nullable: true })
  titApcId: number | null;

  @Column("varchar", { name: "TitProtocoloDigito", nullable: true, length: 1 })
  titProtocoloDigito: string | null;

  @Column("datetime2", { name: "TitDataDistribuicao", nullable: true })
  titDataDistribuicao: Date | null;

  @Column("decimal", {
    name: "TitJuros",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  titJuros: number | null;

  @Column("datetime2", { name: "TitDataRegistroAlegacao", nullable: true })
  titDataRegistroAlegacao: Date | null;

  @Column("decimal", {
    name: "TitJurosPrevistos",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  titJurosPrevistos: number | null;

  @Column("decimal", { name: "TitTotalValorSelo", precision: 10, scale: 2 })
  titTotalValorSelo: number;

  @Column("varchar", { name: "TitChaveUnica", nullable: true, length: 255 })
  titChaveUnica: string | null;

  @Column("bit", { name: "TitEmolumentosAntecipados", nullable: true })
  titEmolumentosAntecipados: boolean | null;

  @Column("datetime2", { name: "TitDataProtocolizacao", nullable: true })
  titDataProtocolizacao: Date | null;

  @Column("int", { name: "Tit_ApcId24h", nullable: true })
  titApcId24h: number | null;

  @Column("char", { name: "TitProtestoEspecial", nullable: true, length: 1 })
  titProtestoEspecial: string | null;
}
