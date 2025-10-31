// Objetivo: Controlador para as rotas de formatação de arquivos XML de selos.

import { AppDataSource } from "../../../config/database/data-source";
import { NextFunction, Request, Response } from "express";
import { FormatXmlService } from "../service/formatXmlService";
import { readFile } from "fs";
const path = require("path");
import multer from "multer";
import { In } from "typeorm";
import fs from "fs";
import * as xml2js from "xml2js";
import { uploadText } from "../../../config/middlewares/multer";
import { TblTitulo } from "../../../entity/entities/TblTitulo";


// Definindo as rotas para a criação de novos XML de selos
const upload = multer({ storage: uploadText.getConfig.storage }).array(
  "remessaFile"
);
export class RemessaController {
  constructor(private formatXmlService: FormatXmlService) {}

  private tituloRepository = AppDataSource.getRepository(TblTitulo);

  async criarNovoXML(selos) {
    // Construa o objeto JavaScript com a estrutura desejada
    const novoXML = {
      Cabecalho: {
        CodigoComarca: "1",
        CodigoCartorio: "244",
        CodigoPedido: "205667",
        DataPedido: "13032024",
        Selos: selos,
      },
    };

    // Converter o objeto JavaScript em XML
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(novoXML);

    // Escrever o XML para um arquivo
    try {
      await fs.promises.writeFile("novo.xml", xml);
      console.log("Novo arquivo XML criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar o arquivo XML:", error);
    }
  }

  async formataSelosComEspaco(request: Request, response: Response) {
    const resultadoProcessamento =
      await this.formatXmlService.formatSelosXmlComEspaco();
    if (resultadoProcessamento === "Arquivos Xml processados") {
      return response.status(200).json(resultadoProcessamento);
    } else {
      return response.status(400).json({ erro: "erro de processamento" });
    }
  }

  async formataSelosSemEspaco(request: Request, response: Response) {
    try {
      await upload(request, response, async (err) => {
        if (err instanceof multer.MulterError) {
          return response.status(500).json({ error: err.message });
        } else if (err) {
          return response.status(500).json({ error: err.message });
        }

        const uploadedFiles = request.files;

        if (!uploadedFiles) {
          return response.status(400).json({ error: "Nenhum arquivo enviado" });
        }

        await this.processarXMLSemEspaco(
          uploadedFiles as Express.Multer.File[],
          request,
          response
        );
        //   return response.status(200).json({status:'upload realizado com sucesso',
        // path: pathFile});
      });

      // return response.status(200).json({status:'upload realizado com sucesso',
      // path: pathFile});
      // return await this.processarArquivo(request.file, response);
    } catch (error) {
      console.error("Erro ao processar arquivo:", error);
      response.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async processarXMLSemEspaco(files: Express.Multer.File[], request, response) {
    for (const file of files) {
      const dadosXML = await fs.readFileSync(file.path, "utf-8");

      xml2js.parseString(dadosXML, async (err, result) => {
        if (err) {
          console.error(`${path.basename(file)} Erro ao analisar XML:`, err);
        } else {
          const protocolo_dist =
            result.PrestacaoContas.AtoPraticado[0].Protocolo[0].trim();

          result.PrestacaoContas.AtoPraticado[0].Protocolo[0] = protocolo_dist;

          // Converter o objeto JavaScript de volta para XML
          const builder = new xml2js.Builder();
          const xml = builder.buildObject(result);

          // Escrever o XML atualizado de volta para um arquivo
          fs.writeFileSync(file.path, xml);
          console.log("Arquivo XML atualizado com sucesso!");
        }
      });
    }
    return response.json("xml processado com sucesso");
  }

  async tratarCargaSelos(req, res) {
    const files = await fs.readdirSync(`${__dirname}../../../../xml_selos`);

    try {
      if (path.extname(files[0]) === ".xml") {
        const filePath = path.join(
          `${__dirname}../../../../xml_selos`,
          files[0]
        );

        const dadosXML = await fs.readFileSync(filePath, "utf-8");

        await xml2js.parseString(dadosXML, async (err, result) => {
          if (err) {
            console.error(
              `Erro ao analisar XML ${path.basename(files[0])}:`,
              err
            );
          } else {
            const selosTratar = result.Cabecalho[0].Selos;
            // const
            for (let i = 0; i < 10000; i++) {
              // selos[i]
            }
          }
        });
      }
    } catch (error) {
      console.error(`Erro ao processar o arquivo ${files[0]}:`, error);
    }

    return "Arquivos Xml processados";
  }

  async formatXmlNumeroOrdemZero(req, res) {
    this.formatXmlService.formatSelosXmlNumeroOrdemZero();
    return "Arquivos Xml processados";
  }

  async formatXmlFaixasTitulos(req, res) {
    return await this.formatXmlService.formatSelosXmlPorFaixa();
  }

  async atualizaAtosAntigos(req, res) {
    return await this.formatXmlService.atualizaAtosAntigos();
  }

  async formatXmlTermoToProtocoloCartorio(req, res) {
    return await this.formatXmlService.formatSelosXmlTermoProtocoloCartorio();
  }

  async formatXmlAnalisandoErros(req, res) {
    // const configTratamento = req.body;
    await this.formatXmlService.formatXmlAnalisandoErros();
    return res.json("xml processado com sucesso");
  }

  async criarInstrumentoAssinado(req, res) {
    await this.formatXmlService.criarInstrumentoAssinado();
    return res.json('xml processado com sucesso');
  }

  // Rota para disparar a função de tratamento de selos travados
  async analiseSelosTravados(req, res) {
    await this.formatXmlService.analiseSelosTravados();
    return "finalizado";
  }

  async insertXmlCargaSelos(req, res) {
    await this.formatXmlService.insertXmlCargaSelos();
    return "finalizado";
  }

  async correcaoCodigoNatureza(req, res) {
    await this.formatXmlService.formatSeloSemCodNatureza();
    return "finalizado";
  }

  async alterarMesLoteSelo(req, res) {
    await this.formatXmlService.alterarMesLoteSelo();
    return (res.statusCode = 200);
  }

  async atribuiNovoSeloErro143(req, res) {
    await this.formatXmlService.atribuiNovoSeloErro143();
    return res.status(200).json("selos processados com sucesso");
  }

  async findXmlByProtocolo(req, res) {
    const listaArquivosXml = await this.formatXmlService.findXmlSelobyProtocolo(
      req.params.protocolo
    );
    return res.status(200).json(listaArquivosXml);
  }

  async validaSelosTJPA(req, res) {
    await this.formatXmlService.validaSelosTJPA();
    res.json("validado");
  }

  async formatCodSegurancaSeloLote(req, res) {
    await this.formatXmlService.formatCodSegurancaSeloLote();
    return res.json("operação realizada com sucesso");
  }
}
