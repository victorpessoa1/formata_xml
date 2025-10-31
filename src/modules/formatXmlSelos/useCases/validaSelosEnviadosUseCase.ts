const path = require('path');
import fs from 'fs';
import * as xml2js from 'xml2js';
import { TblCodSegurancaSeloRepository } from '../repository/tblCodSegurancaSelo.repository';


export class ValidaSelosEnviadosUseCase {

  constructor(){}

  async handle(seloXml,caminhoDoArquivoSelo): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let caminhoSeloAtt = '';
      try {
          if (path.extname(caminhoDoArquivoSelo) === '.xml') {
    
            xml2js.parseString(seloXml,async (err, result) => {
            if (err) {
                console.error(`Erro ao analisar XML ${path.basename(caminhoDoArquivoSelo)}:`, err);
            } else {

            try {
                const emolumentos = result.PrestacaoContas.AtoPraticado[0].ValorEmolumento[0] === '0.00';
                const frc = result.PrestacaoContas.AtoPraticado[0].ValorFRC[0] === '0.00';
                const frj = result.PrestacaoContas.AtoPraticado[0].ValorFRJ[0] === '0.00';
                if(emolumentos && frc && frj){
                  fs.rename(path.join(__dirname, '../../../../xml_selos', path.basename(caminhoDoArquivoSelo)),path.join(__dirname, '../../../../xml_selos/xml_selo_att_enviados', path.basename(caminhoDoArquivoSelo)) ,(err) => {
                    if (err) {
                      console.error('Erro ao mover:', err);
                      return;
                    }
                    console.log('Arquivo movido!');
                  });
                  resolve(caminhoSeloAtt);
                }else{
                    // Converter o objeto JavaScript de volta para XML
                    const builder = new xml2js.Builder();
                    const xml = builder.buildObject(result);
                    
                    // Escrever o XML atualizado de volta para um arquivo
                    fs.writeFileSync(`${__dirname}../../../../xml_selo_att/${path.basename(caminhoDoArquivoSelo)}`, xml);
                    caminhoSeloAtt = path.join(__dirname, '../../../xml_selo_att', path.basename(caminhoDoArquivoSelo));
                    resolve(caminhoSeloAtt);
                }
                

            } catch (error) {
              console.error(`${path.basename(caminhoDoArquivoSelo)} Erro ao acessar o protocolo:`, error);
              // Converter o objeto JavaScript de volta para XML
              const builder = new xml2js.Builder();
              const xml = builder.buildObject(result);
  
              
              // Escrever o XML atualizado de volta para um arquivo
              fs.writeFileSync(`${__dirname}../../../../xml_selos_travados/${path.basename(caminhoDoArquivoSelo)}`, xml);
              return;
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