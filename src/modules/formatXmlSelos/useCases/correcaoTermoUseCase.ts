const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";

export class CorrecaoTermoUseCase {
  constructor() {}

  async handle(seloXml, termoAtt, caminhoDoArquivoSelo): Promise<string> {
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
                const protocolo =
                  result.PrestacaoContas.AtoPraticado[0].Protocolo[0];
                console.log("Valor do protocolo:", protocolo);
              } catch (error) {
                console.error(
                  `${path.basename(
                    caminhoDoArquivoSelo
                  )} Erro ao acessar o protocolo:`,
                  error
                );
                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);
                fs.writeFileSync(
                  `${__dirname}../../../../xml_selos_travados/${path.basename(
                    caminhoDoArquivoSelo
                  )}`,
                  xml
                );
                reject(error);
              }

              const termo = termoAtt.trim().split(".").join("");

              if (termo !== undefined && termo !== null) {
                // Garanta que Termo seja uma string vazia se o termo for vazio
                result.PrestacaoContas.AtoPraticado[0].Termo[0] =
                  termo === "" ? "" : `${termo}`;

                const builder = new xml2js.Builder({
                  renderOpts: { pretty: true, indent: "  ", newline: "\n" },
                  xmldec: { version: "1.0", encoding: "UTF-8" },
                  headless: false,
                });

                let xml = builder.buildObject(result);

                // Substitua o comportamento self-closing para a tag Termo
                xml = xml.replace(/<Termo\/>/g, "<Termo></Termo>");

                caminhoSeloAtt = path.join(
                  __dirname,
                  "../../../xml_selo_att",
                  path.basename(caminhoDoArquivoSelo)
                );
                fs.writeFileSync(
                  `${__dirname}../../../../xml_selo_att/${path.basename(
                    caminhoDoArquivoSelo
                  )}`,
                  xml
                );
                console.log(path.basename(caminhoDoArquivoSelo));

                resolve(caminhoSeloAtt);
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
