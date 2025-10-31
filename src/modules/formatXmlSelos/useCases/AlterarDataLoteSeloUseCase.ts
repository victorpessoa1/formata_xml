const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";

export class AlterarDataLoteSeloUseCase {
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
                result.PrestacaoContas.Cabecalho[0].DataTransmissao[0] =
                  "03062024";
                result.PrestacaoContas.Cabecalho[0].MesAnoLote[0] = "062024";
                result.PrestacaoContas.AtoPraticado[0].DataRecolhimento[0] =
                  "03062024";

                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);

                const nomeAtual = path.basename(caminhoDoArquivoSelo);

                const nomeXmlAtt = `${nomeAtual.substring(
                  0,
                  15
                )}_03062024_${nomeAtual.substring(25)}`;

                // Escrever o XML atualizado de volta para um arquivo
                fs.writeFileSync(
                  `${__dirname}../../../../xml_selo_att/${nomeXmlAtt}`,
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

                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);

                const nomeAtual = path.basename(caminhoDoArquivoSelo);

                const nomeXmlAtt = `${nomeAtual.substring(
                  0,
                  15
                )}_03062024_${nomeAtual.substring(15)}`;

                fs.writeFileSync(
                  `${__dirname}../../../../xml_selos_travados/${nomeXmlAtt}`,
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
