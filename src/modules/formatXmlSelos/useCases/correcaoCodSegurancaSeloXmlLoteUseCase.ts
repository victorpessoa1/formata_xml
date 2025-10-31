const path = require("path");
import fs from "fs";
import * as xml2js from "xml2js";
import { TblCodSegurancaSeloRepository } from "../repository/tblCodSegurancaSelo.repository";

export class CorrecaoCodSegurancaUseCaseSeloXmlLoteUseCase {
  constructor(
    private readonly tblSeloDigitalRepository: TblCodSegurancaSeloRepository
  ) {}

  async handle(dadosSeloXml, caminhoDoArquivoSelo): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let caminhoSeloAtt;
      try {
        if (path.extname(caminhoDoArquivoSelo) === ".xml") {
          xml2js.parseString(dadosSeloXml, async (err, result) => {
            if (err) {
              console.error(
                `Erro ao analisar XML ${path.basename(caminhoDoArquivoSelo)}:`,
                err
              );
            } else {
              try {
                const atosPraticados = result.PrestacaoContas.AtoPraticado;
                for (const atoPraticado of atosPraticados) {
                  const tipoSelo = atoPraticado.SelosAto[0].Tipo[0];
                  const serieSelo = atoPraticado.SelosAto[0].Serie[0];
                  const codigoSegurancaAntigo =
                    atoPraticado.SelosAto[0].CodigoSeguranca[0];

                  let codigoSegurancaAtt;

                  const seloCodigoCorrigido =
                    await this.tblSeloDigitalRepository.findSelo(
                      tipoSelo,
                      serieSelo,
                      codigoSegurancaAntigo
                    );

                  if (seloCodigoCorrigido !== null) {
                    codigoSegurancaAtt =
                      seloCodigoCorrigido.codigoSeguranca.trim();
                  } else {
                    codigoSegurancaAtt = codigoSegurancaAntigo;
                  }

                  atoPraticado.SelosAto[0].CodigoSeguranca[0] =
                    codigoSegurancaAtt;

                  if (atoPraticado.Nota[0] === "0") {
                    atoPraticado.Nota[0] = {};
                  }

                  let pessoasAto = atoPraticado.PessoasAto;
                  pessoasAto = pessoasAto.filter(
                    (pessoaAto) => pessoaAto.NumeroDocumento[0] !== "null"
                  );
                  for (let i = 0; i < pessoasAto.length; i++) {
                    pessoasAto[i].SequencialAto[0] = i + 1;
                  }
                  atoPraticado.PessoasAto = pessoasAto;
                }

                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);

                // Escrever o XML atualizado de volta para um arquivo
                fs.writeFileSync(
                  `${__dirname}../../../../xml_selo_att/${path.basename(
                    caminhoDoArquivoSelo
                  )}`,
                  xml
                );

                caminhoSeloAtt = `${__dirname}../../../../xml_selo_att`;
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

              resolve(caminhoSeloAtt);
            }
          });
        }
      } catch (error) {
        console.error(`Erro ao processar o arquivo ${dadosSeloXml}:`, error);
        reject(error);
      }
    });
  }
}
