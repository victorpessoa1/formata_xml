const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";
import { TblTitulo } from "../../../entity/entities/TblTitulo";
import { TblTituloRepository } from "../repository/tblTitulo.repository";

export class FormatXmlNumeroOrdemZeroUseCase {
  constructor() {}

  async handle() {
    const files = await fs.readdirSync(`${__dirname}../../../../xml_selos`);

    for (const file of files) {
      try {
        if (path.extname(file) === ".xml") {
          const filePath = path.join(`${__dirname}../../../../xml_selos`, file);

          const dadosXML = await fs.readFileSync(filePath, "utf-8");

          await xml2js.parseString(dadosXML, async (err, result) => {
            if (err) {
              console.error(
                `Erro ao analisar XML ${path.basename(file)}:`,
                err
              );
            } else {
              try {
                const protocolo =
                  result.PrestacaoContas.AtoPraticado[0].Protocolo[0];
                console.log("Valor do protocolo:", protocolo);
              } catch (error) {
                console.error(
                  `${path.basename(file)} Erro ao acessar o protocolo:`,
                  error
                );
                // Converter o objeto JavaScript de volta para XML
                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);

                // Escrever o XML atualizado de volta para um arquivo
                await fs.writeFileSync(
                  `${__dirname}../../../../xml_selos_travados/${path.basename(
                    file
                  )}`,
                  xml
                );
                return;
              }

              const protocolo_cartorio = parseInt(
                result.PrestacaoContas.AtoPraticado[0].Protocolo[0].trim()
              );
              result.PrestacaoContas.AtoPraticado[0].NumeroOrdem[0] = "0";

              const builder = new xml2js.Builder();
              const xml = builder.buildObject(result);

              // Escrever o XML atualizado de volta para um arquivo
              await fs.writeFileSync(
                `${__dirname}../../../../xml_selo_att/${path.basename(file)}`,
                xml
              );
              console.log("Arquivo XML atualizado com sucesso!");
            }
          });
        }
      } catch (error) {
        console.error(`Erro ao processar o arquivo ${file}:`, error);
      }
    }

    return "Arquivos Xml processados";
  }
}
