const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";
import { XmlSeloDTO } from "../dto/xmlSeloDTO";

export class FormatXmlSeloUseCase {
  constructor() {}

  async handle(dadosProtocolo, dadosSeloUsado): Promise<string> {
    const xmlSeloFormatado = new XmlSeloDTO({
      Cabecalho: {
        CodigoComarca: "1",
        CodigoCartorio: "244",
        DataTransmissao: "02052024",
        HoraTransmissao: "101911",
        MesAnoLote: "072024",
      },
      AtoPraticado: {
        SequencialAto: "1",
        CodigoAto: dadosSeloUsado.codAto,
        VersaoTabela: "2024",
        DataRecolhimento: "02052024",
        ValorTransacao: dadosProtocolo.valor,
        ValorEmolumento: dadosSeloUsado.emolumentos,
        ValorFRJ: dadosSeloUsado.frj,
        ValorFRC: dadosSeloUsado.frc,
        NaturezaAto: "1999",
        Titulo: dadosProtocolo.numTitulo,
        DataVencimentoTitulo: dadosProtocolo.vencimento,
        Livro: dadosProtocolo.livro,
        FolhaOuFicha: dadosProtocolo.folha,
        Termo: "",
        Nota: "",
        Protocolo: dadosProtocolo.protocoloCartorio,
        Apontamento: "",
        Certidao: "",
        NumeroOrdem: "0",
        NumeroProcedimentos: "1",
        SelosAto: {
          SequencialAto: "1",
          CodigoSelo: dadosSeloUsado.nSelo,
          Tipo: dadosSeloUsado.tipo,
          Serie: dadosSeloUsado.serie,
          CodigoSeguranca: dadosSeloUsado.codSeg,
        },
        PessoasAto: {
          SequencialAto: "1",
          NumeroDocumento: dadosProtocolo.numDevedor,
          TipoDocumento: "1",
          TipoParticipacao: "1001",
          NomePessoa: dadosProtocolo.devedor,
        },
        AtoPraticadoFilho: "",
      },
      Rodape: {
        QuantidadeAtos: "1",
        QuantidadeSelos: "1",
        ValorTotalTransacao: dadosProtocolo.valor,
        ValorTotalEmolumentos: dadosSeloUsado.emolumentos,
        ValorTotalFRJ: dadosSeloUsado.frj,
        ValorTotalFRC: dadosSeloUsado.frc,
      },
    });

    const builder = new xml2js.Builder();
    const xml = builder.buildObject(xmlSeloFormatado);
    return;
  }
}
