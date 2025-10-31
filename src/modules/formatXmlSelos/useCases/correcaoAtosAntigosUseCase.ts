const path = require('path');
import fs from 'fs';
import * as xml2js from 'xml2js';

export class CorreCaoAtosAntigosUseCase {

    constructor(){}

    async handle() {
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
    
                  if(
                    result.PrestacaoContas.AtoPraticado[0].ValorEmolumento[0] === '8.60' ||
                    result.PrestacaoContas.AtoPraticado[0].ValorEmolumento[0] === '8.10'
                  ){
                    result.PrestacaoContas.AtoPraticado[0].ValorEmolumento[0] = '8.10';
                    result.PrestacaoContas.Rodape[0].ValorTotalEmolumentos[0] = '8.10';
                    result.PrestacaoContas.AtoPraticado[0].ValorFRJ[0] = '1.22';
                    result.PrestacaoContas.Rodape[0].ValorTotalFRC[0] = '0.20';
                    result.PrestacaoContas.AtoPraticado[0].ValorFRC[0] = '0.20';
                    result.PrestacaoContas.Rodape[0].ValorTotalFRJ[0] = '1.22';
                  }
                

                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);
  
              
                // Escrever o XML atualizado de volta para um arquivo
                await fs.writeFileSync(`${__dirname}../../../../xml_selo_att/${path.basename(file)}`, xml);
                console.log('Arquivo XML atualizado com sucesso!');



                if (fs.existsSync(path.join(__dirname, '../../../xml_selo_att', path.basename(file)))){
                  fs.unlink(path.join(__dirname, '../../../xml_selos', path.basename(file)), (err) => {
                      if (err) {
                        console.error('Erro ao excluir o arquivo:', err);
                        return;
                      }
                      console.log('Arquivo excluído com sucesso!');
                  });
                }
                return;
              } catch (error) {
                console.error(`${path.basename(file)} Erro ao acessar o protocolo:`, error);
                // Converter o objeto JavaScript de volta para XML
                const builder = new xml2js.Builder();
                const xml = builder.buildObject(result);
    
                
                
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