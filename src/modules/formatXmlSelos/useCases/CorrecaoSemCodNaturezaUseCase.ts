const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";
import { XmlSeloDTO } from "../dto/xmlSeloDTO";

export class CorrecaoSemCodNaturezaUseCase {
  constructor() {}

  async handle(seloXml, caminhoDoArquivoSelo): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let caminhoSeloAtt;
      try {
        if (path.extname(caminhoDoArquivoSelo) === ".xml") {
          xml2js.parseString(seloXml, async (err, result) => {
            if (err) {
              console.error(
                `Erro ao analisar XML ${path.basename(caminhoDoArquivoSelo)}:`,
                err
              );
            } else {
              try {
                const cabecalho = result.PrestacaoContas.Cabecalho[0];

                const atoPraticado = result.PrestacaoContas.AtoPraticado[0];

                const rodape = result.PrestacaoContas.Rodape[0];

                const xmlSeloFormatado = new XmlSeloDTO({
                  Cabecalho: {
                    CodigoComarca: cabecalho.CodigoComarca[0],
                    CodigoCartorio: cabecalho.CodigoCartorio[0],
                    DataTransmissao: cabecalho.DataTransmissao[0],
                    HoraTransmissao: cabecalho.HoraTransmissao[0],
                    MesAnoLote: cabecalho.MesAnoLote[0],
                  },
                  AtoPraticado: {
                    SequencialAto: atoPraticado.SequencialAto[0],
                    CodigoAto: atoPraticado.CodigoAto[0],
                    VersaoTabela: atoPraticado.VersaoTabela[0],
                    DataRecolhimento: atoPraticado.DataRecolhimento[0],
                    ValorTransacao: atoPraticado.ValorTransacao[0],
                    ValorEmolumento: atoPraticado.ValorEmolumento[0],
                    ValorFRJ: atoPraticado.ValorFRJ[0],
                    ValorFRC: atoPraticado.ValorFRC[0],
                    NaturezaAto: "1999",
                    Titulo: atoPraticado.Titulo[0],
                    DataVencimentoTitulo: atoPraticado.DataVencimentoTitulo[0],
                    Livro: atoPraticado.Livro[0],
                    FolhaOuFicha: atoPraticado.FolhaOuFicha[0],
                    Termo: atoPraticado.Termo[0],
                    Nota: atoPraticado.Nota[0],
                    Protocolo: atoPraticado.Protocolo[0],
                    Apontamento: atoPraticado.Apontamento[0],
                    Certidao: atoPraticado.Certidao[0],
                    NumeroOrdem: atoPraticado.NumeroOrdem[0],
                    NumeroProcedimentos: atoPraticado.NumeroProcedimentos[0],
                    SelosAto: {
                      SequencialAto: atoPraticado.SelosAto[0].SequencialAto[0],
                      CodigoSelo: atoPraticado.SelosAto[0].CodigoSelo[0],
                      Tipo: atoPraticado.SelosAto[0].Tipo[0],
                      Serie: atoPraticado.SelosAto[0].Serie[0],
                      CodigoSeguranca:
                        atoPraticado.SelosAto[0].CodigoSeguranca[0],
                    },
                    PessoasAto: {
                      SequencialAto:
                        atoPraticado.PessoasAto[0].SequencialAto[0],
                      NumeroDocumento:
                        atoPraticado.PessoasAto[0].NumeroDocumento[0],
                      TipoDocumento:
                        atoPraticado.PessoasAto[0].TipoDocumento[0],
                      TipoParticipacao:
                        atoPraticado.PessoasAto[0].TipoParticipacao[0],
                      NomePessoa: atoPraticado.PessoasAto[0].NomePessoa[0],
                    },
                    AtoPraticadoFilho: atoPraticado.AtoPraticadoFilho[0],
                  },
                  Rodape: {
                    QuantidadeAtos: rodape.QuantidadeAtos[0],
                    QuantidadeSelos: rodape.QuantidadeSelos[0],
                    ValorTotalTransacao: rodape.ValorTotalTransacao[0],
                    ValorTotalEmolumentos: rodape.ValorTotalEmolumentos[0],
                    ValorTotalFRJ: rodape.ValorTotalFRJ[0],
                    ValorTotalFRC: rodape.ValorTotalFRC[0],
                  },
                });

                const builder = new xml2js.Builder();
                const xml = builder.buildObject(xmlSeloFormatado);

                // Escrever o XML atualizado de volta para um arquivo
                fs.writeFileSync(
                  `${__dirname}../../../../xml_selo_att/${path.basename(
                    caminhoDoArquivoSelo
                  )}`,
                  xml
                );
                caminhoSeloAtt = path.join(
                  __dirname,
                  "../../../xml_selo_att",
                  path.basename(caminhoDoArquivoSelo)
                );
                resolve(caminhoSeloAtt);
              } catch (error) {
                console.error(
                  `${path.basename(
                    caminhoDoArquivoSelo
                  )} Erro ao acessar o protocolo:`,
                  error
                );
                // Converter o objeto JavaScript de volta para XML
                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);

                // Escrever o XML atualizado de volta para um arquivo
                fs.writeFileSync(
                  `${__dirname}../../../../xml_selos_travados/${path.basename(
                    caminhoDoArquivoSelo
                  )}`,
                  xml
                );
                return;
              }
            }
          });
        }
      } catch (error) {
        console.error(`Erro ao processar o arquivo ${seloXml}:`, error);
        reject(error);
      }
    });
  }
}
