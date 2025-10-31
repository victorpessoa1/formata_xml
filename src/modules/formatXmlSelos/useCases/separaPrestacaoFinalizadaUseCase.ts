const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";

export class SeparaPrestacaoFinalizadaUseCase {
  constructor() {}

  async handle(
    seloXml,
    caminhoDoArquivoSelo,
    arquivoErroXml,
    caminhoArquivoErro
  ): Promise<string> {
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
              reject(err);
            } else {
              try {
                const mesAnoLote =
                  result.PrestacaoContas.Cabecalho[0].MesAnoLote[0];
                const pathMesAnoLoteDir = path.join(
                  __dirname,
                  "../../../xml_selos_travados/prestacao_finalizada/",
                  mesAnoLote
                );

                const pathSeloMesAnoLote = path.join(
                  pathMesAnoLoteDir,
                  path.basename(caminhoDoArquivoSelo)
                );

                const pathArquivoErro = path.join(pathMesAnoLoteDir, "/errors");

                const pathXmlErro = path.join(
                  pathArquivoErro,
                  path.basename(caminhoArquivoErro)
                );

                if (!fs.existsSync(pathMesAnoLoteDir)) {
                  fs.mkdirSync(pathMesAnoLoteDir, { recursive: true });
                }

                if (!fs.existsSync(pathArquivoErro)) {
                  fs.mkdirSync(pathArquivoErro, { recursive: true });
                }

                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);
                fs.writeFileSync(pathSeloMesAnoLote, xml);
                const parser = new xml2js.Parser();
                const convertXmlErro = await parser.parseStringPromise(
                  arquivoErroXml
                );
                const xmlErro = builder.buildObject(convertXmlErro);
                fs.writeFileSync(pathXmlErro, xmlErro);
                caminhoSeloAtt = pathSeloMesAnoLote;

                fs.unlink(
                  path.join(
                    __dirname,
                    "../../../xml_erros",
                    path.basename(caminhoArquivoErro)
                  ),
                  (err) => {
                    if (err) {
                      console.error(
                        "Erro ao excluir o arquivo (prestação finalizada) :",
                        err
                      );
                      return;
                    }
                    console.log(
                      "Arquivo excluído com sucesso! (prestação finalizada)"
                    );
                  }
                );

                fs.unlink(
                  path.join(
                    __dirname,
                    "../../../xml_selos",
                    path.basename(caminhoDoArquivoSelo)
                  ),
                  (err) => {
                    if (err) {
                      console.error(
                        "Erro ao excluir o arquivo (prestação finalizada):",
                        err
                      );
                      return;
                    }
                    console.log(
                      "Arquivo excluído com sucesso! (prestação finalizada)"
                    );
                  }
                );
                resolve(caminhoSeloAtt);
              } catch (error) {
                console.error(
                  `${path.basename(
                    caminhoDoArquivoSelo
                  )} Erro ao acessar o tag mes ano lote:`,
                  error
                );
                reject(error);
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
