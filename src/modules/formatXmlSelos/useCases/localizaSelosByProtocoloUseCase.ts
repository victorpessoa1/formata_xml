const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";

export class LocalizaSelosByProcoloUseCase {
  constructor() {}

  async handle(protocolo: string): Promise<string[]> {
    try {
      const listaArquivos = [];
      console.log(`${__dirname}../../../xml_selos`);
      const xmlFiles = await fs.readdirSync(
        `${__dirname}../../../../xml_selos`
      );

      for (const xmlFile of xmlFiles) {
        if (path.extname(xmlFile) !== ".xml") {
          console.error(
            `formato do arquivo ${path.basename(
              xmlFile
            )} é inválido.o arquivo deve ser um .xml`
          );
          continue;
        }
        const xmlFilePath = path.join(
          `${__dirname}../../../../xml_selos`,
          xmlFile
        );

        const dadosXML = await fs.readFileSync(xmlFilePath, "utf-8");

        if (dadosXML === "") {
          continue;
        }

        await xml2js.parseString(dadosXML, async (err, result) => {
          if (err) {
            console.error(
              `Erro ao analisar XML ${path.basename(xmlFile)}:`,
              err
            );
          } else {
            const protocoloXml =
              result.PrestacaoContas.AtoPraticado[0].Protocolo[0];
            if (protocoloXml === protocolo) {
              listaArquivos.push(path.basename(xmlFile));
            }
          }
        });
      }
      return listaArquivos;
    } catch (error) {
      console.error(`erro ao atribuir novo selo ao xml com erro 143 ${error}`);
    }
  }
}
