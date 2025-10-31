import { Router } from "express";
import { remessaController } from "../controller";
import multer from "multer";
import { uploadText } from "../../../config/middlewares/multer";

export const routerRemessa = Router();

//nao recebe arq de upload pasta xml_selos
routerRemessa.post("/tratamento/xml/com/espacos", async (req, res) => {
  return await remessaController.formataSelosComEspaco(req, res);
});

//recebe arq de upload
routerRemessa.post("/tratamento/xml/sem/espacos", async (req, res) => {
  return await remessaController.formataSelosSemEspaco(req, res);
});

routerRemessa.post("/tratamento/xml/carga/selos", async (req, res) => {
  return await remessaController.tratarCargaSelos(req, res);
});

routerRemessa.post("/tratamento/xml/numero/ordem/zero", async (req, res) => {
  return await remessaController.formatXmlNumeroOrdemZero(req, res);
});

routerRemessa.post("/tratamento/xml/faixa/valor", async (req, res) => {
  return await remessaController.formatXmlFaixasTitulos(req, res);
});

routerRemessa.post(
  "/tratamento/xml/termo/protocolo/cartorio",
  async (req, res) => {
    return await remessaController.formatXmlTermoToProtocoloCartorio(req, res);
  }
);

routerRemessa.post("/tratamento/xml/analisando/erro", async (req, res) => {
  return await remessaController.formatXmlAnalisandoErros(req, res);
});

routerRemessa.post("/intrumento/base64", async (req, res) => {
  return await remessaController.criarInstrumentoAssinado(req, res);
});

// Rota para disparar a função de tratamento de selos travados
routerRemessa.post("/tratamento/selos/travados", async (req, res) => {
  return await remessaController.analiseSelosTravados(req, res);
});

routerRemessa.post("/insert/carga/selos", async (req, res) => {
  await remessaController.insertXmlCargaSelos(req, res);
  res.status(200).send("inserção realizada com sucesso");
});

routerRemessa.post("/atualizar/atos/antigos", async (req, res) => {
  await remessaController.atualizaAtosAntigos(req, res);
});

routerRemessa.post("/gerar/codigo/natureza", async (req, res) => {
  return await remessaController.correcaoCodigoNatureza(req, res);
});

routerRemessa.post("/modificar/data/lote/selo", async (req, res) => {
  return await remessaController.alterarMesLoteSelo(req, res);
});

routerRemessa.get("/find/xml/protocolo/:protocolo", async (req, res) => {
  return await remessaController.findXmlByProtocolo(req, res);
});

routerRemessa.get("/valida/selos/tjpa", async (req, res) => {
  return await remessaController.validaSelosTJPA(req, res);
});

routerRemessa.post("/correcao/selos/codseguranca/lote", async (req, res) => {
  return await remessaController.formatCodSegurancaSeloLote(req, res);
});
