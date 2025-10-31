const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";

export class CorrecaoCodigoNaturezaUseCase {
  constructor() {}

  async handle(seloXml, codNaturezaAtt, caminhoDoArquivoSelo): Promise<string> {
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
              const codNatureza = codNaturezaAtt.trim().split(".").join("");

              if (codNatureza) {
                result.PrestacaoContas.AtoPraticado[0].NaturezaAto[0] = `${codNatureza}`;

                //   delete result.PrestacaoContas.AtoPraticado[0].Termo$;
                //   delete result.PrestacaoContas.AtoPraticado[0].Termo;

                //   result.PrestacaoContas.AtoPraticado[0].Termo = [`${termo}`];

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
