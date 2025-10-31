const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";
import { TblCodSegurancaSeloRepository } from "../repository/tblCodSegurancaSelo.repository";

export class CorrecaoCodSegurancaUseCase {
  constructor(
    private readonly tblSeloDigitalRepository: TblCodSegurancaSeloRepository
  ) {}

  async handle(seloXml, caminhoDoArquivoSelo, codigoSelo): Promise<string> {
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
                const protocolo =
                  result.PrestacaoContas.AtoPraticado[0].SelosAto[0]
                    .CodigoSeguranca[0];
                console.log("codigo seguranca:", protocolo);
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
                return;
              }
              const tipoSelo =
                result.PrestacaoContas.AtoPraticado[0].SelosAto[0].Tipo[0];
              const serieSelo =
                result.PrestacaoContas.AtoPraticado[0].SelosAto[0].Serie[0];
              const codigoSegurancaAntigo =
                result.PrestacaoContas.AtoPraticado[0].SelosAto[0]
                  .CodigoSeguranca[0];
              ("");
              let codigoSegurancaAtt;

              const seloCodigoCorrigido =
                await this.tblSeloDigitalRepository.findSelo(
                  tipoSelo,
                  serieSelo,
                  codigoSegurancaAntigo
                );

              if (seloCodigoCorrigido !== null) {
                codigoSegurancaAtt = seloCodigoCorrigido.codigoSeguranca.trim();
              } else {
                codigoSegurancaAtt = codigoSegurancaAntigo;
              }

              result.PrestacaoContas.AtoPraticado[0].SelosAto[0].CodigoSeguranca[0] =
                codigoSegurancaAtt.trim();

              // Converter o objeto JavaScript de volta para XML
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(result);

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
