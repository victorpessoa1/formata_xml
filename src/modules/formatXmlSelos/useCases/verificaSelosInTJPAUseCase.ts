const path = require("path");
import fs from "fs";
import axios from "axios";
import cheerio from "cheerio";
const htmlparser2 = require("htmlparser2");
import * as xml2js from "xml2js";
const xpath = require("xpath");
const { DOMParser } = require("xmldom");
const puppeteer = require("puppeteer");

export class VerificaSelosInTJPAUseCase {
  constructor() {}

  async handle(): Promise<string> {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(
        `https://apps.tjpa.jus.br/ValidaSeloDigital/Detalhes/Resultado?codigoSelo=${"7692510"}&serie=${"A"}&codigoTiposelo=${"113"}&codigoSeguranca=${"01529670000057552153511221"}`
      );

      await page.waitForSelector("table#TabelaAtoPraticado");

      const content = await page.evaluate(() => {
        const dadosSelosTJ = {
          selo: "",
          serie: "",
          dataSelado: "",
          codigoSeguranca: "",
          qtdAto: "",
          emolumentos: "",
          frj: "",
          frc: "",
          ato: "",
          faixaTitulo: "",
          tipoSelos: "",
          tipoParticipacao: "",
          nomePessoa: "",
          tipoDocumentacao: "",
          numeroDocumento: "",
          teste: "",
        };

        const xpathAtoFaixa =
          "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody/tr[2]/td[1]";
        const resultAtoFaixa = document.evaluate(
          xpathAtoFaixa,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const atoFaixaNode = resultAtoFaixa.singleNodeValue;
        const ato = atoFaixaNode.textContent.split("-")[0].trim();
        const faixa = atoFaixaNode.textContent.split("-")[1].trim();
        dadosSelosTJ.ato = ato;
        dadosSelosTJ.faixaTitulo = faixa;

        const xpathTipoSelo =
          "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody/tr[2]/td[2]";
        const resultTipoSelo = document.evaluate(
          xpathTipoSelo,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );

        const tipoSeloNode = resultTipoSelo.singleNodeValue;
        const tipoSelo = tipoSeloNode.textContent;
        dadosSelosTJ.tipoSelos = tipoSelo;

        const xpathDataSelado =
          "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody/tr[2]/td[3]";
        const resultDataSelado = document.evaluate(
          xpathDataSelado,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const dataSeladoNode = resultDataSelado.singleNodeValue;
        const dataSelado = dataSeladoNode.textContent;
        dadosSelosTJ.dataSelado = dataSelado;

        const xpathEmolumentos =
          "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody/tr[2]/td[5]";
        const resultEmolumentos = document.evaluate(
          xpathEmolumentos,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const emolumentosNode = resultEmolumentos.singleNodeValue;
        const emolumentos = emolumentosNode.textContent;
        dadosSelosTJ.emolumentos = emolumentos;

        const xpathFrj =
          "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody/tr[2]/td[6]";
        const resultFrj = document.evaluate(
          xpathFrj,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const frjNode = resultFrj.singleNodeValue;
        const frj = frjNode.textContent;
        dadosSelosTJ.frj = frj;

        const xpathFrc =
          "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody/tr[2]/td[7]";
        const resultFrc = document.evaluate(
          xpathFrc,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const frcNode = resultFrc.singleNodeValue;
        const frc = frcNode.textContent;
        dadosSelosTJ.frc = frc;

        const xpathTipoParticipacao =
          "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody/tr[3]/td/table/tbody/tr[2]/td[2]";
        const resultTipoParticipacao = document.evaluate(
          xpathTipoParticipacao,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const tipoParticipacaoNode = resultTipoParticipacao.singleNodeValue;
        const tipoParticipacao = tipoParticipacaoNode.textContent;
        dadosSelosTJ.tipoParticipacao = tipoParticipacao;

        const xpathNomePessoa =
          "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody/tr[3]/td/table/tbody/tr[2]/td[3]";
        const resultNomePessoa = document.evaluate(
          xpathNomePessoa,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const nomePessoaNode = resultNomePessoa.singleNodeValue;
        const nomePessoa = nomePessoaNode.textContent;
        dadosSelosTJ.nomePessoa = nomePessoa;

        const xpathTipoDocumentacao =
          "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody/tr[3]/td/table/tbody/tr[2]/td[4]";
        const resultTipoDocumentacao = document.evaluate(
          xpathTipoDocumentacao,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const tipoDocumentacaoNode = resultTipoDocumentacao.singleNodeValue;
        const tipoDocumentacao = tipoDocumentacaoNode.textContent;
        dadosSelosTJ.tipoDocumentacao = tipoDocumentacao;

        const xpathNumeroDocumento =
          "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody/tr[3]/td/table/tbody/tr[2]/td[5]";
        const resultNumeroDocumento = document.evaluate(
          xpathNumeroDocumento,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const numeroDocumentacaoNode = resultNumeroDocumento.singleNodeValue;
        const numeroDocumentacao = numeroDocumentacaoNode.textContent;
        dadosSelosTJ.numeroDocumento = numeroDocumentacao;

        const xpathSelo =
          "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody/tr[2]/td[4]";
        const resultSelo = document.evaluate(
          xpathSelo,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const seloNode = resultSelo.singleNodeValue;
        const selo = seloNode.textContent;
        dadosSelosTJ.selo = selo;

        const xpathSerie =
          "/html/body/div[2]/div/div[2]/div/div[1]/table/tbody/tr[2]/td/span";
        const resultSerie = document.evaluate(
          xpathSerie,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const serieNode = resultSerie.singleNodeValue;
        let serie = serieNode.textContent;
        const regexSerie = /SÉRIE:\s*([^ -]+)/;
        serie = serie.match(regexSerie)[1];
        dadosSelosTJ.serie = serie;

        const xpathQtdAto =
          "/html/body/div[2]/div/div[2]/div/div[1]/table/tbody/tr[4]/td/table/tbody/tr[2]/td[1]/span";
        const resultQtdAto = document.evaluate(
          xpathQtdAto,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const QtdAtoNode = resultQtdAto.singleNodeValue;
        const QtdAto = QtdAtoNode.textContent;
        dadosSelosTJ.qtdAto = QtdAto;

        const xpathCodSeguranca =
          "/html/body/div[2]/div/div[2]/div/div[1]/table/tbody/tr[3]/td/span";
        const resultCodSeguranca = document.evaluate(
          xpathCodSeguranca,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const codSegurancaNode = resultCodSeguranca.singleNodeValue;
        let codSeguranca = codSegurancaNode.textContent;
        codSeguranca = codSeguranca.split(":")[1];
        dadosSelosTJ.codigoSeguranca = codSeguranca;

        return dadosSelosTJ;
      });

      const xpathTbody =
        "/html/body/div[2]/div/div[2]/div/div[2]/div/table/tbody";

      //funcao para contar elementos filhos
      const childNodeCount = await page.evaluate((xpath) => {
        const resultTbody = document.evaluate(
          xpath,
          document,
          null,
          xpath.result.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;

        // Verificar se o nó retornado é um HTMLElement
        if (resultTbody instanceof HTMLElement) {
          return resultTbody.childElementCount;
        } else {
          return 0;
        }
      }, xpathTbody);

      console.log(`Número de nós filhos: ${childNodeCount}`);

      console.log("Conteúdo:", content);

      await browser.close();
    } catch (error) {
      console.error("Erro ao buscar e exibir o HTML:", error);
      return null;
    }
  }
}
