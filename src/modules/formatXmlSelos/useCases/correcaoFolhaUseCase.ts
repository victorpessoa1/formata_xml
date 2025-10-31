const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";

export class CorrecaoFolhaUseCase {
  constructor() {}

  async handle(seloXml, folhaAtt, caminhoDoArquivoSelo): Promise<string> {
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
              const folhaSemEspaco = folhaAtt.trim().split(".").join("");

              if (folhaSemEspaco) {
                result.PrestacaoContas.AtoPraticado[0].FolhaOuFicha[0] = `${folhaSemEspaco}`;

                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);

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
