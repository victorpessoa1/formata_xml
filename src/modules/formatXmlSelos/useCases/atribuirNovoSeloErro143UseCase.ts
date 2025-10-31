const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";

import { TblSeloDigitalRepository } from "../repository/tblSeloDigital.repository";

export class AtribuirNovoSeloErro143UseCase {
  constructor(
    private readonly tblSeloDigitalRepository: TblSeloDigitalRepository
  ) {}

  async handle(): Promise<string> {
    try {
      const errorFiles = await fs.readdirSync(
        `${__dirname}../../../../xml_erros`
      );

      for (const errorFile of errorFiles) {
        if (path.extname(errorFile) !== ".xml") {
          console.error(
            `formato do arquivo ${path.basename(
              errorFile
            )} é inválido.o arquivo de erro deve ser um .xml`
          );
          continue;
        }
        const errorFilePath = path.join(
          `${__dirname}../../../../xml_erros`,
          errorFile
        );

        const dadosErrorXML = await fs.readFileSync(errorFilePath, "utf-8");

        if (dadosErrorXML === "") {
          continue;
        }

        await xml2js.parseString(dadosErrorXML, async (err, result) => {
          if (err) {
            console.error(
              `Erro ao analisar XML ${path.basename(errorFile)}:`,
              err
            );
          } else {
            const reportErrorsXmlContent =
              result["soap:Envelope"]["soap:Body"][0].PrestacaoContasResponse[0]
                .PrestacaoContasResult[0].ValidationResult;
            if (!reportErrorsXmlContent) {
              return;
            }
            const nomeSelo = path
              .basename(errorFile)
              .replace("Erro_", "Prestacao_1_244_");
            let caminhoDoArquivoSelo = path.join(
              __dirname,
              "../../../xml_selos",
              nomeSelo
            );
            let conteudoDoArquivoSelo = await fs.readFileSync(
              caminhoDoArquivoSelo,
              "utf8"
            );

            xml2js.parseString(conteudoDoArquivoSelo, async (err, result) => {
              if (err) {
                console.error(
                  `Erro ao analisar XML ${path.basename(
                    caminhoDoArquivoSelo
                  )}:`,
                  err
                );
              } else {
                const codSelo =
                  result.PrestacaoContas.AtoPraticado[0].SelosAto[0]
                    .CodigoSelo[0];
                console.log(codSelo);
              }
            });
          }
        });
      }
      return "";
    } catch (error) {
      console.error(`erro ao atribuir novo selo ao xml com erro 143 ${error}`);
    }
  }
}
