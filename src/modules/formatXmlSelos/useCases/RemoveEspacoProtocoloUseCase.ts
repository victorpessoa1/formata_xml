const path = require('path');
import fs from 'fs';
import * as xml2js from 'xml2js';

export class RemoveEspacoProtocoloUseCase {

    constructor(){}

    async handle(seloXml,caminhoDoArquivoSelo): Promise<string> {
      return new Promise<string>((resolve, reject) => {
        let caminhoSeloAtt;
          try {
            if (path.extname(caminhoDoArquivoSelo) === '.xml') {
      
              xml2js.parseString(seloXml,async (err, result) => {
              if (err) {
                  console.error(`Erro ao analisar XML ${path.basename(caminhoDoArquivoSelo)}:`, err);
                  reject(err);
              } else {

              try {
                const protocolo = result.PrestacaoContas.AtoPraticado[0].Protocolo[0];
                console.log('Valor do protocolo:', protocolo);
              } catch (error) {
                console.error(`${path.basename(caminhoDoArquivoSelo)} Erro ao acessar o protocolo:`, error);
                // Converter o objeto JavaScript de volta para XML
                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);
    
                
                // Escrever o XML atualizado de volta para um arquivo
                fs.writeFileSync(`${__dirname}../../../../xml_selos_travados/${path.basename(caminhoDoArquivoSelo)}`, xml);
                reject(error)
              }
              
              const protocolo = result.PrestacaoContas.AtoPraticado[0].Protocolo[0].trim();
              
              if(protocolo){
                
                result.PrestacaoContas.AtoPraticado[0].Protocolo[0]= `${protocolo}`;
                
                // Converter o objeto JavaScript de volta para XML
                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);
    
                
                // Escrever o XML atualizado de volta para um arquivo
                caminhoSeloAtt = await fs.writeFileSync(`${__dirname}../../../../xml_selo_att/${path.basename(caminhoDoArquivoSelo)}`, xml);
                caminhoSeloAtt = path.join(__dirname, '../../../xml_selo_att', path.basename(caminhoDoArquivoSelo));
                resolve(caminhoSeloAtt);
              }
            }
          })
        }

          } catch (error) {
            console.error(`Erro ao processar o arquivo ${seloXml}:`, error);
            reject(error);
          }
        
        });
    }
}