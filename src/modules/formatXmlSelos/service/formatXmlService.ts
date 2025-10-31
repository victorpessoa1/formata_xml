import { FormatXmlComEspacoUseCase } from "../useCases/formatXmlComEspacoUseCase.usecase";
import { FormatXmlNumeroOrdemZeroUseCase } from "../useCases/formatXmlNumeroOrdemZeroUseCase";
import { FormatXmlPorFaixaValorUseCase } from "../useCases/formatXmlPorFaixaValorUseCase";
import { FormatXmlTermoProtocoloUseCase } from "../useCases/formatXmlTermoProtocoloCartorioUseCase";
import fs, { createReadStream } from "fs";
import * as xml2js from "xml2js";
import path from "path";
import { AdicionaEspacoProtocoloUseCase } from "../useCases/AdicionaEspacoProtocoloUseCase";
import { RemoveEspacoProtocoloUseCase } from "../useCases/RemoveEspacoProtocoloUseCase";
import { CorrecaoApontamentoUseCase } from "../useCases/correcaoApontamentoUseCase";
import { CorrecaoNumeroOrdemUseCase } from "../useCases/correcaoNumeroOrdemUseCase";
import { Readable } from "typeorm/platform/PlatformTools";
import { CorrecaoFrjUseCase } from "../useCases/correcaoFrjUseCase";
import { CorrecaoFrcUseCase } from "../useCases/correcaoFrcUseCase";
import { CorrecaoTermoUseCase } from "../useCases/correcaoTermoUseCase";
import { CorrecaoTipoProtocoloUseCase } from "../useCases/correcaoTipoProtocoloUseCase";
import { CorrecaoNotaUseCase } from "../useCases/correcaoNotaUseCase";
import { CorrecaoCodigoNaturezaUseCase } from "../useCases/correcaoCodigoNaturezaUseCase";
import { CorrecaoCodSegurancaUseCase } from "../useCases/correcaoCodSegurancaSeloUseCase";
import { CorrecaoRodapeSeloUseCase } from "../useCases/correcaoRodapeSeloUseCase";
import { InsertXmlCargaSelosUseCase } from "../useCases/insertXmlCargaSelosUseCase";
import { CorreCaoAtosAntigosUseCase } from "../useCases/correcaoAtosAntigosUseCase";
import { CorrecaoCodNotaDataRecolhimentoUseCase } from "../useCases/correcaoCodAtoDataRecolhimentoUseCase";
import { FormatXmlSeloUseCase } from "../useCases/formatXmlSeloUseCase";
import { CorrecaoFolhaUseCase } from "../useCases/correcaoFolhaUseCase";
import { CorrecaoLivroUseCase } from "../useCases/correcaoLivroUseCase";
import { ValidaSelosEnviadosUseCase } from "../useCases/validaSelosEnviadosUseCase";
import { CorrecaoSemCodNaturezaUseCase } from "../useCases/CorrecaoSemCodNaturezaUseCase";
import { AlterarDataLoteSeloUseCase } from "../useCases/AlterarDataLoteSeloUseCase";
import { SeparaPrestacaoFinalizadaUseCase } from "../useCases/separaPrestacaoFinalizadaUseCase";
import { AtribuirNovoSeloErro143UseCase } from "../useCases/atribuirNovoSeloErro143UseCase";
import { LocalizaSelosByProcoloUseCase } from "../useCases/localizaSelosByProtocoloUseCase";
import { VerificaSelosInTJPAUseCase } from "../useCases/verificaSelosInTJPAUseCase";
import { CorrecaoCodSegurancaUseCaseSeloXmlLoteUseCase } from "../useCases/correcaoCodSegurancaSeloXmlLoteUseCase";

export class FormatXmlService {
  constructor(
    private readonly formatXmlComEspacoUseCase: FormatXmlComEspacoUseCase,
    private readonly formatXmlNumeroOrdemZeroUseCase: FormatXmlNumeroOrdemZeroUseCase,
    private readonly formatXmlPorFaixaValor: FormatXmlPorFaixaValorUseCase,
    private readonly formatXmlTermoProtocoloCartorio: FormatXmlTermoProtocoloUseCase,
    private readonly adicionaEspacoProtocolo: AdicionaEspacoProtocoloUseCase,
    private readonly removeEspacoProtocolo: RemoveEspacoProtocoloUseCase,
    private readonly correcaoApontamento: CorrecaoApontamentoUseCase,
    private readonly correcaoNumeroOrdem: CorrecaoNumeroOrdemUseCase,
    private readonly correcaoFrj: CorrecaoFrjUseCase,
    private readonly correcaoFrc: CorrecaoFrcUseCase,
    private readonly correcaoTermo: CorrecaoTermoUseCase,
    private readonly correcaoTipoProtocolo: CorrecaoTipoProtocoloUseCase,
    private readonly correcaoNota: CorrecaoNotaUseCase,
    private readonly correcaoCodigoNaturezaUseCase: CorrecaoCodigoNaturezaUseCase,
    private readonly correcaoCodSegurancaSelo: CorrecaoCodSegurancaUseCase,
    private readonly correcaoRodapeSeloUseCase: CorrecaoRodapeSeloUseCase,
    private readonly insertXmlCargaSelosUseCase: InsertXmlCargaSelosUseCase,
    private readonly correcaoAtosAntigosUseCase: CorreCaoAtosAntigosUseCase,
    private readonly correcaoNotaDataRecolhimentoUseCase: CorrecaoCodNotaDataRecolhimentoUseCase,
    private readonly formatXmlSeloUseCase: FormatXmlSeloUseCase,
    private readonly correcaoFolhaUseCase: CorrecaoFolhaUseCase,
    private readonly correcaoLivroUseCase: CorrecaoLivroUseCase,
    private readonly validaSelosEnviadosUseCase: ValidaSelosEnviadosUseCase,
    private readonly CorrecaoSemCodNaturezaUseCase: CorrecaoSemCodNaturezaUseCase,
    private readonly alterarDataLoteSeloUseCase: AlterarDataLoteSeloUseCase,
    private readonly separaPrestacaoFinalizadaUseCase: SeparaPrestacaoFinalizadaUseCase,
    private readonly atribuirNovoSeloErro143UseCase: AtribuirNovoSeloErro143UseCase,
    private readonly localizaSelosByProcoloUseCase: LocalizaSelosByProcoloUseCase,
    private readonly verificaSelosInTJPAUseCase: VerificaSelosInTJPAUseCase,
    private readonly correcaoCodSegurancaUseCaseSeloXmlLoteUseCase: CorrecaoCodSegurancaUseCaseSeloXmlLoteUseCase
  ) {}

  async createXmlSelo(protocolo, selo, serie, tipo) {}

  async formatCodSegurancaSeloLote() {
    const seloFiles = await fs.readdirSync(`${__dirname}../../../../xml_selos`);

    for (const seloXml of seloFiles) {
      const seloFilePath = path.join(
        `${__dirname}../../../../xml_selos`,
        seloXml
      );

      const dadosSeloXML = await fs.readFileSync(seloFilePath, "utf-8");
      await this.correcaoCodSegurancaUseCaseSeloXmlLoteUseCase.handle(
        dadosSeloXML,
        seloFilePath
      );
    }

    return "";
  }
  async findXmlSelobyProtocolo(protocolo) {
    return await this.localizaSelosByProcoloUseCase.handle(protocolo);
  }

  async validaSelosTJPA() {
    return this.verificaSelosInTJPAUseCase.handle();
  }

  async atualizaAtosAntigos() {
    return this.correcaoAtosAntigosUseCase.handle();
  }

  async atribuiNovoSeloErro143() {
    return await this.atribuirNovoSeloErro143UseCase.handle();
  }

  async criarInstrumentoAssinado() {
    // Lê todos os arquivos XML da pasta xml_instrumentos
    const listXmlInstrumentoProtesto = await fs.readdirSync(
      `${__dirname}../../../../xml_instrumentos`
    );

    // Percorre todos os arquivos XML de instrumentos
    for (const instrumento of listXmlInstrumentoProtesto) {
      // Usa try/catch para tratar erros
      try {
        // Verifica se o arquivo é um XML
        if (path.extname(instrumento) === ".xml") {
          const filePath = path.join(
            `${__dirname}../../../../xml_instrumentos`,
            instrumento
          );
          // Lê o conteúdo do arquivo XML
          const dadosXML = await fs.readFileSync(filePath, "utf-8");
          // Converte o XML para objeto JavaScript
          await xml2js.parseString(dadosXML, async (err, result) => {
            if (err) {
              console.error(
                `Erro ao analisar XML ${path.basename(instrumento)}:`,
                err
              );
            } else {
              // guarda em apresentantes todos os apresentantes do arquivo XML
              const apresentantes =
                result.estados.estado[0].cartorios[0].cartorio[0]
                  .apresentantes[0].apresentante;
              // Percorre todos os apresentantes do arquivo XML
              for (let i = 0; i < apresentantes.length; i++) {
                // para cada apresentante, guarda o nome do arquivo PDF do instrumento
                const titulo =
                  result.estados.estado[0].cartorios[0].cartorio[0]
                    .apresentantes[0].apresentante[i].titulos[0].titulo[0];

                const nomeArquivoPdfID = titulo["$"].id;

                try {
                  const instrumentoFilePath = path.join(
                    `${__dirname}../../../../instrumentos_assinados`,
                    `${nomeArquivoPdfID}.pdf.p7s`
                  );

                  const fileStream = createReadStream(instrumentoFilePath);
                  const base64Data = await this.streamToBase64(fileStream);

                  delete result.estados.estado[0].cartorios[0].cartorio[0]
                    .apresentantes[0].apresentante[i].titulos[0].titulo[0]
                    .instrumento_eletronico$;

                  result.estados.estado[0].cartorios[0].cartorio[0].apresentantes[0].apresentante[
                    i
                  ].titulos[0].titulo[0].instrumento_eletronico = [
                    `${base64Data}`,
                  ];
                } catch (e) {
                  console.log(`erro no arquivo: ${nomeArquivoPdfID}`);
                }
              }

              const partesArray = await this.dividirArrayEmPartes(
                apresentantes,
                500
              );

              for (let i = 0; i < partesArray.length; i++) {
                result.estados.estado[0].cartorios[0].cartorio[0].apresentantes[0][
                  "$"
                ].total = partesArray[i].length;
                result.estados.estado[0].cartorios[0].cartorio[0].apresentantes[0].apresentante =
                  partesArray[i];

                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);
                await fs.writeFileSync(
                  `${__dirname}../../../../instrumento_att/${i}-${path.basename(
                    instrumento
                  )}`,
                  xml
                );
              }

              console.log("Arquivo XML de instrumento atualizado com sucesso!");
            }
          });
        }
      } catch (error) {}
    }
  }

  // Serviço para a de tratamento de selos travados
  async analiseSelosTravados() {
    // guarda em seloFiles todos os arquivos XML da pasta xml_analise_selos_travados
    const seloFiles = await fs.readdirSync(
      `${__dirname}../../../../xml_analise_selos_travados`
    );

    // Percorrer todos os arquivos XML de selos
    for (const seloXml of seloFiles) {
      // Usa try/catch para tratar erros
      try {
        // Verifica se o arquivo é um XML
        if (path.extname(seloXml) === ".xml") {
          const seloFilePath = path.join(
            `${__dirname}../../../../xml_selos`,
            seloXml
          );
          // Lê o conteúdo do arquivo XML
          const dadosSeloXML = await fs.readFileSync(seloFilePath, "utf-8");
          // Converte o XML para objeto JavaScript
          await xml2js.parseString(dadosSeloXML, async (err, result) => {
            if (err) {
              console.error(
                `Erro ao analisar XML ${path.basename(seloXml)}:`,
                err
              );
            } else {
            }
          });
        }
      } catch (error) {
        console.error(`Erro ao processar o arquivo ${seloXml}:`, error);
      }
    }
  }

  async dividirArrayEmPartes(array, tamanhoParte) {
    const partes = [];
    const totalPartes = Math.ceil(array.length / tamanhoParte);
    for (let i = 0; i < totalPartes; i++) {
      const parte = array.slice(i * tamanhoParte, (i + 1) * tamanhoParte);
      partes.push(parte);
    }
    return partes;
  }

  async streamToBase64(stream: Readable): Promise<string> {
    try {
      const chunks: Uint8Array[] = [];
      for await (const chunk of stream) {
        chunks.push(chunk);
      }
      const buffer = Buffer.concat(chunks);
      return buffer.toString("base64");
    } catch (error) {
      console.error("Erro ao converter o stream para base64:", error);
      throw error;
    }
  }

  async formatSelosXmlComEspaco(): Promise<String> {
    return await this.formatXmlComEspacoUseCase.handle();
  }

  async formatSelosXmlNumeroOrdemZero() {
    return await this.formatXmlNumeroOrdemZeroUseCase.handle();
  }

  async formatSelosXmlPorFaixa() {
    return await this.formatXmlPorFaixaValor.handle();
  }

  async formatSelosXmlTermoProtocoloCartorio() {
    return await this.formatXmlTermoProtocoloCartorio.handle();
  }

  async formatXmlAnalisandoErros() {
    const errorFiles = await fs.readdirSync(
      `${__dirname}../../../../xml_erros`
    );

    for (const errorFile of errorFiles) {
      try {
        if (path.extname(errorFile) === ".xml") {
          const errorFilePath = path.join(
            `${__dirname}../../../../xml_erros`,
            errorFile
          );

          const dadosErrorXML = fs.readFileSync(errorFilePath, "utf-8");

          if (dadosErrorXML === "") {
            continue;
          }

          await xml2js.parseString(
            dadosErrorXML,
            async (err: Error, result) => {
              if (err) {
                console.error(
                  `Erro ao analisar XML ${path.basename(errorFile)}:`,
                  err
                );
              } else {
                try {
                  const reportErrorsXmlContent =
                    result["soap:Envelope"]["soap:Body"][0]
                      .PrestacaoContasResponse[0].PrestacaoContasResult[0]
                      .ValidationResult;
                  if (!reportErrorsXmlContent) {
                    return;
                  }
                  const nomeSelo = path
                    .basename(errorFile)
                    .replace(/Erro_\d{3}_/, "Prestacao_1_244_");
                  let caminhoDoArquivoSelo = path.join(
                    __dirname,
                    "../../../xml_selos",
                    nomeSelo
                  );
                  let conteudoDoArquivoSelo = fs.readFileSync(
                    caminhoDoArquivoSelo,
                    "utf8"
                  );

                  for (const logErro of reportErrorsXmlContent) {
                    if (logErro.Codigo[0] === "998") {
                      const matchDescricao = "Prestação de contas finalizada";
                      if (logErro.Descricao[0].includes(matchDescricao)) {
                        console.log("prestação de contas finalizada");
                      }
                      caminhoDoArquivoSelo =
                        await this.separaPrestacaoFinalizadaUseCase.handle(
                          conteudoDoArquivoSelo,
                          caminhoDoArquivoSelo,
                          dadosErrorXML,
                          errorFile
                        );
                    }
                    if (logErro.Codigo[0] === "102") {
                      const regex = /Selo nº: (\d+)/;
                      const matches = logErro.Descricao[0].match(regex);
                      let numeroSelo = matches[1].split(" ").join("");
                      caminhoDoArquivoSelo =
                        await this.correcaoCodSegurancaSelo.handle(
                          conteudoDoArquivoSelo,
                          caminhoDoArquivoSelo,
                          numeroSelo
                        );
                      conteudoDoArquivoSelo = await fs.readFileSync(
                        caminhoDoArquivoSelo,
                        "utf8"
                      );
                    }

                    if (logErro.Codigo[0] === "107") {
                      const fs = require("fs");
                      const xml2js = require("xml2js");

                      let xmlString = conteudoDoArquivoSelo;
                      xml2js.parseString(xmlString, (err, result) => {
                        if (err) {
                          console.error("Erro ao interpretar XML:", err);
                          return;
                        }

                        const atosPraticados =
                          result.PrestacaoContas.AtoPraticado;
                        atosPraticados.forEach((ato) => {
                          if (
                            ato.NumeroProcedimentos &&
                            ato.NumeroProcedimentos.length > 0
                          ) {
                            const valorAtual = parseFloat(
                              ato.NumeroProcedimentos[0]
                            );
                            const novoValor = Math.round(valorAtual / 2);
                            ato.NumeroProcedimentos[0] = novoValor.toString();
                          }
                        });

                        const builder = new xml2js.Builder();
                        const xmlModificado = builder.buildObject(result);

                        console.log(xmlModificado);

                        fs.writeFileSync(
                          `${__dirname}../../../../xml_selo_att/${path.basename(
                            caminhoDoArquivoSelo
                          )}`,
                          xmlModificado,
                          (err) => {
                            if (err) {
                              console.error(
                                "Erro ao salvar o arquivo XML modificado:",
                                err
                              );
                            } else {
                              console.log(
                                "Arquivo XML modificado salvo com sucesso!"
                              );
                            }
                          }
                        );
                      });

                      console.log(result);
                    }

                    if (logErro.Codigo[0] === "142") {
                      const regex =
                        /Código da Natureza 1a Prestação:\s*(\d+)\.\s*Código da Natureza 2a Prestação:\s*(\d+[,\d]*)\.\s*/;
                      const matches = logErro.Descricao[0].match(regex);
                      let codNatureza1Prestacao = matches[1]
                        .split(" ")
                        .join("");
                      let codNatureza2Prestacao = matches[2];

                      if (codNatureza2Prestacao !== undefined) {
                        codNatureza2Prestacao = matches[2].split(" ").join("");
                      } else {
                        codNatureza2Prestacao = "";
                      }

                      if (codNatureza1Prestacao !== codNatureza2Prestacao) {
                        caminhoDoArquivoSelo =
                          await this.correcaoCodigoNaturezaUseCase.handle(
                            conteudoDoArquivoSelo,
                            codNatureza1Prestacao,
                            caminhoDoArquivoSelo
                          );
                        conteudoDoArquivoSelo = fs.readFileSync(
                          caminhoDoArquivoSelo,
                          "utf8"
                        );
                      }
                    }

                    if (logErro.Codigo[0] === "145") {
                      const regex = /Selo de Postecipação já Utilizado/;
                      if (regex.test(logErro.Descricao[0])) {
                        fs.rename(
                          path.join(
                            __dirname,
                            "../../../xml_selos",
                            path.basename(caminhoDoArquivoSelo)
                          ),
                          path.join(
                            __dirname,
                            "../../../xml_selos/xml_selo_att_enviados_tj",
                            path.basename(caminhoDoArquivoSelo)
                          ),
                          (err) => {
                            if (err) {
                              console.error(
                                "Erro ao mover (selo enviado tj):",
                                err
                              );
                              return;
                            }
                          }
                        );
                        caminhoDoArquivoSelo = path.join(
                          __dirname,
                          "../../../xml_selos/xml_selo_att_enviados_tj",
                          path.basename(caminhoDoArquivoSelo)
                        );
                        conteudoDoArquivoSelo = await fs.readFileSync(
                          caminhoDoArquivoSelo,
                          "utf8"
                        );
                        continue;
                      }
                    }

                    if (logErro.Codigo[0] === "146") {
                      const regex =
                        /Livro da 1a Prestação:\s*(\d+\s*\.\s*)?Livro do ato da 2a Prestação:\s*(\d+\s*\.\s*)?/;
                      const matches = logErro.Descricao[0].match(regex);
                      let termo1Prestacao = matches[1].split(" ").join("");
                      let termo2Prestacao = matches[2];

                      if (termo2Prestacao !== undefined) {
                        termo2Prestacao = matches[2].split(" ").join("");
                      } else {
                        termo2Prestacao = "";
                      }

                      if (termo1Prestacao !== termo2Prestacao) {
                        caminhoDoArquivoSelo =
                          await this.correcaoLivroUseCase.handle(
                            conteudoDoArquivoSelo,
                            termo1Prestacao,
                            caminhoDoArquivoSelo
                          );
                        conteudoDoArquivoSelo = await fs.readFileSync(
                          caminhoDoArquivoSelo,
                          "utf8"
                        );
                      }
                    }

                    if (logErro.Codigo[0] === "147") {
                      const regex =
                        /Folha ou Ficha da 1a Prestação:\s*(\d+\s*\.\s*)?Folha ou Ficha do ato da 2a Prestação:\s*(\d+\s*\.\s*)?/;
                      const matches = logErro.Descricao[0].match(regex);
                      let termo1Prestacao = matches[1].split(" ").join("");
                      let termo2Prestacao = matches[2];

                      if (termo2Prestacao !== undefined) {
                        termo2Prestacao = matches[2].split(" ").join("");
                      } else {
                        termo2Prestacao = "";
                      }

                      if (termo1Prestacao !== termo2Prestacao) {
                        caminhoDoArquivoSelo =
                          await this.correcaoFolhaUseCase.handle(
                            conteudoDoArquivoSelo,
                            termo1Prestacao,
                            caminhoDoArquivoSelo
                          );
                        conteudoDoArquivoSelo = await fs.readFileSync(
                          caminhoDoArquivoSelo,
                          "utf8"
                        );
                      }
                    }

                    if (logErro.Codigo[0] === "148") {
                      const regex =
                        /Termo da 1a Prestação:\s*(\d+\s*\.\s*)?Termo do ato da 2a Prestação:\s*(\d+\s*\.\s*)?/;
                      const matches = logErro.Descricao[0].match(regex);
                      let termo1Prestacao = matches[1].split(" ").join("");
                      let termo2Prestacao = matches[2];

                      if (termo2Prestacao !== undefined) {
                        termo2Prestacao = matches[2].split(" ").join("");
                      } else {
                        termo2Prestacao = "";
                      }

                      if (termo1Prestacao !== termo2Prestacao) {
                        caminhoDoArquivoSelo = await this.correcaoTermo.handle(
                          conteudoDoArquivoSelo,
                          termo1Prestacao,
                          caminhoDoArquivoSelo
                        );
                        conteudoDoArquivoSelo = await fs.readFileSync(
                          caminhoDoArquivoSelo,
                          "utf8"
                        );
                      }
                    }

                    // if (logErro.Codigo[0] === "149") {
                    //   const regex =
                    //     /Nota da 1a Prestação:\s*(\d*\.?\d*)\s*\.\s*Nota do ato da 2a Prestação:\s*(\d*\.?\d*)\s*\./;
                    //   const matches = logErro.Descricao[0].match(regex);
                    //   let nota1Prestacao = matches[1].split(" ").join("");
                    //   let nota2Prestacao = matches[2];

                    //   if (nota2Prestacao !== undefined) {
                    //     nota2Prestacao = matches[2].split(" ").join("");
                    //   } else {
                    //     nota2Prestacao = "";
                    //   }

                    //   if (nota1Prestacao !== nota2Prestacao) {
                    //     caminhoDoArquivoSelo = await this.correcaoNota.handle(
                    //       conteudoDoArquivoSelo,
                    //       caminhoDoArquivoSelo,
                    //       nota1Prestacao
                    //     );
                    //     conteudoDoArquivoSelo = await fs.readFileSync(
                    //       caminhoDoArquivoSelo,
                    //       "utf8"
                    //     );
                    //   }
                    // }

                    if (logErro.Codigo[0] === "150") {
                      const regex =
                        /Protocolo da 1a Prestação:\s*(\d+\s*\.\s*)?Protocolo do ato da 2a Prestação:\s*(\d+\s*\.\s*)?/;

                      const matches = logErro.Descricao[0].match(regex);
                      // const protocolo1Prestacao = matches[1].split(' ').join('');
                      const protocolo1Prestacao = matches[1]
                        .trim()
                        .replace(".", "");
                      let protocolo2Prestacao = matches[2];

                      if (protocolo2Prestacao !== undefined) {
                        // protocolo2Prestacao = matches[2].split(' ').join('');
                        protocolo2Prestacao = matches[2]
                          .trim()
                          .replace(".", "");
                      } else {
                        protocolo2Prestacao = "";
                      }

                      console.log(protocolo1Prestacao.length);
                      caminhoDoArquivoSelo =
                        await this.correcaoTipoProtocolo.handle(
                          conteudoDoArquivoSelo,
                          caminhoDoArquivoSelo,
                          protocolo1Prestacao
                        );
                      conteudoDoArquivoSelo = await fs.readFileSync(
                        caminhoDoArquivoSelo,
                        "utf8"
                      );

                      // if(protocolo1Prestacao === protocolo2Prestacao){
                      //     if(matches[1].length > matches[2].length){
                      //         caminhoDoArquivoSelo = await this.adicionaEspacoProtocolo.handle(conteudoDoArquivoSelo,nomeSelo);
                      //         conteudoDoArquivoSelo = await fs.readFileSync(caminhoDoArquivoSelo, 'utf8');
                      //     }else{
                      //         caminhoDoArquivoSelo = await this.removeEspacoProtocolo.handle(conteudoDoArquivoSelo,nomeSelo);
                      //         conteudoDoArquivoSelo = await fs.readFileSync(caminhoDoArquivoSelo, 'utf8');
                      //     }
                      // }else{

                      // }
                    }

                    if (logErro.Codigo[0] === "151") {
                      const regex =
                        /Apontamento da 1a Prestação:\s*(\d+\s*\.\s*)?Apontamento do ato da 2a Prestação:\s*(\d+\s*\.\s*)?/;

                      const matches = logErro.Descricao[0].match(regex);
                      const apontamento1Prestacao = matches[1]
                        .split(" ")
                        .join("");
                      let apontamento2Prestacao = matches[2];

                      if (apontamento2Prestacao !== undefined) {
                        apontamento2Prestacao = matches[2].split(" ").join("");
                      } else {
                        apontamento2Prestacao = "";
                      }

                      if (apontamento1Prestacao !== apontamento2Prestacao) {
                        caminhoDoArquivoSelo =
                          await this.correcaoApontamento.handle(
                            conteudoDoArquivoSelo,
                            apontamento1Prestacao,
                            caminhoDoArquivoSelo
                          );
                        conteudoDoArquivoSelo = await fs.readFileSync(
                          caminhoDoArquivoSelo,
                          "utf8"
                        );
                      }
                    }

                    if (logErro.Codigo[0] === "152") {
                      const regex =
                        /Número de Ordem da 1a Prestação:\s*([^.]*)\.\s*Número de Ordem do ato da 2a Prestação:\s*([^.]*)\./;

                      const matches = logErro.Descricao[0].match(regex);
                      const numeroOrdem1Prestacao = matches[1]
                        .split(" ")
                        .join("");
                      let numeroOrdem2Prestacao = matches[2];

                      if (numeroOrdem2Prestacao !== undefined) {
                        numeroOrdem2Prestacao = matches[2].split(" ").join("");
                      } else {
                        numeroOrdem2Prestacao = "";
                      }

                      if (numeroOrdem1Prestacao !== numeroOrdem2Prestacao) {
                        caminhoDoArquivoSelo =
                          await this.correcaoNumeroOrdem.handle(
                            conteudoDoArquivoSelo,
                            numeroOrdem1Prestacao,
                            caminhoDoArquivoSelo
                          );
                        conteudoDoArquivoSelo = await fs.readFileSync(
                          caminhoDoArquivoSelo,
                          "utf8"
                        );
                      }
                    }

                    // if(logErro.Codigo[0] === '108'){
                    //     const regex = /FRJ R\$:\s*([\d,.]+)\s*FRJ Informado R\$:\s*([\d,.]+)/;

                    //     const matches = logErro.Descricao[0].match(regex);
                    //     const frjCorrigido = matches[1].split(' ').join('');
                    //     let frjIncorreto = matches[2];

                    //     if(frjIncorreto !== undefined){
                    //         frjIncorreto = matches[2].split(' ').join('');
                    //     }else{
                    //         frjIncorreto = '';
                    //     }

                    //     if(frjCorrigido !== frjIncorreto){
                    //         caminhoDoArquivoSelo = await this.correcaoFrj.handle(conteudoDoArquivoSelo,frjCorrigido,caminhoDoArquivoSelo);
                    //         conteudoDoArquivoSelo = await fs.readFileSync(caminhoDoArquivoSelo, 'utf8');
                    //     }
                    // }

                    // if(logErro.Codigo[0] === '109'){
                    //     const regex = /FRC R\$:\s*([\d,.]+)\s*FRC Informado R\$:\s*([\d,.]+)/;

                    //     const matches = logErro.Descricao[0].match(regex);
                    //     const frcCorrigido = matches[1].split(' ').join('');
                    //     let frcIncorreto = matches[2];

                    //     if(frcIncorreto !== undefined){
                    //         frcIncorreto = matches[2].split(' ').join('');
                    //     }else{
                    //         frcIncorreto = '';
                    //     }

                    //     if(frcCorrigido !== frcIncorreto){
                    //         caminhoDoArquivoSelo = await this.correcaoFrc.handle(conteudoDoArquivoSelo,frcCorrigido,caminhoDoArquivoSelo);
                    //         conteudoDoArquivoSelo = await fs.readFileSync(caminhoDoArquivoSelo, 'utf8');
                    //     }
                    // }
                    if (logErro.Codigo[0] === "172") {
                      const regex =
                        /Para este tipo de Ato, o valor do Emolumento deve ser preenchido/;
                      if (regex.test(logErro.Descricao[0])) {
                        caminhoDoArquivoSelo =
                          await this.validaSelosEnviadosUseCase.handle(
                            conteudoDoArquivoSelo,
                            caminhoDoArquivoSelo
                          );
                        if (conteudoDoArquivoSelo === "") {
                          continue;
                        } else {
                          conteudoDoArquivoSelo = await fs.readFileSync(
                            caminhoDoArquivoSelo,
                            "utf8"
                          );
                        }
                      }
                    }

                    if (logErro.Codigo[0] === "173") {
                      const regex =
                        /Nota não encontrada para esta data de recolhimento do ato./;
                      if (regex.test(logErro.Descricao[0])) {
                        fs.rename(
                          path.join(
                            __dirname,
                            "../../../xml_selos",
                            path.basename(caminhoDoArquivoSelo)
                          ),
                          path.join(
                            __dirname,
                            "../../../xml_selos/erro_173",
                            path.basename(caminhoDoArquivoSelo)
                          ),
                          (err) => {
                            if (err) {
                              console.error("Erro ao mover:", err);
                              return;
                            }
                            console.log("Arquivo excluído com sucesso!");
                          }
                        );
                        continue;
                      }
                    }

                    if (logErro.Codigo[0] === "900") {
                      const regexTagFilhaInvalida = /has invalid child element/;

                      if (regexTagFilhaInvalida.test(logErro.Descricao[0])) {
                        caminhoDoArquivoSelo =
                          await this.formatXmlSeloUseCase.handle(
                            conteudoDoArquivoSelo,
                            caminhoDoArquivoSelo
                          );
                        conteudoDoArquivoSelo = await fs.readFileSync(
                          caminhoDoArquivoSelo,
                          "utf8"
                        );
                      }

                      const regexRodape =
                        /Erro na estrutura do arquivo. Tag Rodapé inválida./;
                      if (regexRodape.test(logErro.Descricao[0])) {
                        caminhoDoArquivoSelo =
                          await this.correcaoRodapeSeloUseCase.handle(
                            conteudoDoArquivoSelo,
                            caminhoDoArquivoSelo
                          );
                        conteudoDoArquivoSelo = await fs.readFileSync(
                          caminhoDoArquivoSelo,
                          "utf8"
                        );
                      }
                    }
                  }

                  if (
                    fs.existsSync(
                      path.join(__dirname, "../../../xml_selo_att", nomeSelo)
                    ) ||
                    fs.existsSync(
                      path.join(
                        __dirname,
                        "../../../xml_selo_att/selo_enviados",
                        nomeSelo
                      )
                    )
                  ) {
                    fs.unlink(
                      path.join(__dirname, "../../../xml_selos", nomeSelo),
                      (err) => {
                        if (err) {
                          console.error("Erro ao excluir o arquivo:", err);
                          return;
                        }
                        console.log("Arquivo excluído com sucesso!");
                      }
                    );

                    fs.unlink(
                      path.join(
                        __dirname,
                        "../../../xml_erros",
                        path.basename(errorFile)
                      ),
                      (err) => {
                        if (err) {
                          console.error("Erro ao excluir o arquivo:", err);
                          return;
                        }
                        console.log("Arquivo excluído com sucesso!");
                      }
                    );
                  }
                } catch (error) {
                  console.error(
                    `Erro ao processar o arquivo ${errorFile}:`,
                    error
                  );
                }
              }
            }
          );
        }
      } catch (error) {
        console.log("erro ao processar o selo");
      }
    }
  }

  async insertXmlCargaSelos() {
    return await this.insertXmlCargaSelosUseCase.handle();
  }

  async formatSeloSemCodNatureza() {
    const files = await fs.readdirSync(`${__dirname}../../../../xml_selos`);

    for (const file of files) {
      try {
        if (path.extname(file) === ".xml") {
          const filePath = path.join(`${__dirname}../../../../xml_selos`, file);

          const dadosXML = await fs.readFileSync(filePath, "utf-8");

          this.CorrecaoSemCodNaturezaUseCase.handle(dadosXML, filePath);
        }
      } catch (error) {}
    }
  }

  async alterarMesLoteSelo() {
    const files = await fs.readdirSync(`${__dirname}../../../../xml_selos`);

    for (const file of files) {
      try {
        if (path.extname(file) === ".xml") {
          const filePath = path.join(`${__dirname}../../../../xml_selos`, file);

          const dadosXML = await fs.readFileSync(filePath, "utf-8");

          this.alterarDataLoteSeloUseCase.handle(dadosXML, filePath);
        }
      } catch (error) {}
    }
  }
}
