const path = require('path');
import fs from 'fs';
import * as xml2js from 'xml2js';
import { TblTitulo } from "../../../entity/entities/TblTitulo";
import { TblTituloRepository } from "../repository/tblTitulo.repository";

export class FormatXmlComEspacoUseCase {

    constructor(private readonly tblTituloRepository: TblTituloRepository){}

    async handle(): Promise<string> {
      const files = await fs.readdirSync(`${__dirname}../../../../xml_selos`);
  
      for (const file of files) {
        try {
          
          if (path.extname(file) === '.xml') {
            const filePath = path.join(`${__dirname}../../../../xml_selos`, file);
            
            const dadosXML = await fs.readFileSync(filePath, 'utf-8');
            
            await xml2js.parseString(dadosXML,async (err, result) => {
          if (err) {
            console.error(`Erro ao analisar XML ${path.basename(file)}:`, err);
          } else {

            try {
              const protocolo = result.PrestacaoContas.AtoPraticado[0].Protocolo[0];
              console.log('Valor do protocolo:', protocolo);
            } catch (error) {
              console.error(`${path.basename(file)} Erro ao acessar o protocolo:`, error);
              // Converter o objeto JavaScript de volta para XML
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(result);
  
              
              // Escrever o XML atualizado de volta para um arquivo
              await fs.writeFileSync(`${__dirname}../../../../xml_selos_travados/${path.basename(file)}`, xml);
              return;
            }
            
            const protocolo_cartorio = parseInt(result.PrestacaoContas.AtoPraticado[0].Protocolo[0].trim());
            
            if(!isNaN(protocolo_cartorio)){
              let titulo = await this.tblTituloRepository.findTituloByProtocoloCartorio(Number(protocolo_cartorio));

              if(titulo === null){
                titulo = await this.tblTituloRepository.findTituloByProtocoloDistribuidor(Number(protocolo_cartorio));
              }
              
              const protocoloComEspaços =  `${titulo.protocoloDist}   `
              result.PrestacaoContas.AtoPraticado[0].Protocolo[0]= protocoloComEspaços;
              
              result.PrestacaoContas.AtoPraticado[0].Apontamento[0] = protocolo_cartorio;
              
              if(titulo.codPortador === '912'){
                result.PrestacaoContas.AtoPraticado[0].Nota[0] = '51';
              }else if(
                titulo.codPortador === '914' || 
                titulo.codPortador === '910' ||
                titulo.codPortador === '912'){
                result.PrestacaoContas.AtoPraticado[0].Nota[0] = '49';  
              }else{
                result.PrestacaoContas.AtoPraticado[0].Nota[0] = '0';
              }
              
  
              
              result.PrestacaoContas.AtoPraticado[0].Livro[0] = titulo.apLivro;
              
              result.PrestacaoContas.AtoPraticado[0].FolhaOuFicha[0] = titulo.apPagina;
              
              result.PrestacaoContas.AtoPraticado[0].NumeroOrdem[0] = protocolo_cartorio;
              
              result.PrestacaoContas.AtoPraticado[0].Termo[0] = protocolo_cartorio;

              
              const relacaoAtos = {
                152: "756",
                153: '893',
                154: '894',
                162: '757',
                163: "758",
                164: "760",
                165: "960",
                166: "961",
                167: "963",
                314: "968",
                315: "969",
                170: "966",
                179: "755",
                180: "967"
              }
              
              let codigoAto = result.PrestacaoContas.AtoPraticado[0].CodigoAto[0]

              for(let atoAntigo in relacaoAtos){
                if(codigoAto === atoAntigo){
                  codigoAto = relacaoAtos[atoAntigo];
                  result.PrestacaoContas.AtoPraticado[0].CodigoAto[0] = codigoAto;
                }
              }

              if(result.PrestacaoContas.AtoPraticado[0].ValorEmolumento[0] === '8.60'){
                result.PrestacaoContas.AtoPraticado[0].ValorEmolumento[0] = '8.10';
                result.PrestacaoContas.Rodape[0].ValorTotalEmolumentos[0] = '8.10';
                result.PrestacaoContas.AtoPraticado[0].ValorFRJ[0] = '1.22';
                result.PrestacaoContas.Rodape[0].ValorTotalFRC[0] = '1.22';
                result.PrestacaoContas.AtoPraticado[0].ValorFRC[0] = '0.20';
                result.PrestacaoContas.Rodape[0].ValorTotalFRJ[0] = '0.20';
              }
              
              // Converter o objeto JavaScript de volta para XML
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(result);
  
              
              // Escrever o XML atualizado de volta para um arquivo
              await fs.writeFileSync(`${__dirname}../../../../xml_selo_att/${path.basename(file)}`, xml);
              console.log('Arquivo XML atualizado com sucesso!');
            }
          }
        })
      }

        } catch (error) {
          console.error(`Erro ao processar o arquivo ${file}:`, error);
        }
      }
      


        return 'Arquivos Xml processados';
    }
}