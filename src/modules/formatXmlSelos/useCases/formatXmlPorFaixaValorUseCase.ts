const path = require('path');
import fs from 'fs';
import * as xml2js from 'xml2js';
import { TblTitulo } from "../../../entity/entities/TblTitulo";
import { TblTituloRepository } from "../repository/tblTitulo.repository";
import { TblApontamentoRepository } from '../repository/tblApontamento.repository';
import { TblApontamento } from '../../../entity/entities/TblApontamento';

export class FormatXmlPorFaixaValorUseCase {

    constructor(private readonly tblApontamentoRepository:TblApontamentoRepository){}

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
                console.log(result.PrestacaoContas.AtoPraticado[0].CodigoAto[0]);
                const valorTitulo = result.PrestacaoContas.AtoPraticado[0].ValorTransacao[0];
                const apontamento = await this.tblApontamentoRepository.findFaixaApontamento();
                let atoProtesto = result.PrestacaoContas.AtoPraticado[0].CodigoAto[0];
                atoProtesto = await this.calculoFaixaProtesto(parseFloat(valorTitulo),apontamento[0],atoProtesto);

                console.log(path.basename(file));
                result.PrestacaoContas.AtoPraticado[0].CodigoAto[0] = atoProtesto;
                

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

    async calculoFaixaProtesto(valor:number,apontamento:TblApontamento,atoAtual:string){
      let atoProt = 827
      let faixa = 'faixa'

      for(let i = 0; i< 65; i++){
        if(valor<= apontamento[faixa+i]){
            return atoProt.toString();
        }
        atoProt++
      }

      return atoAtual;

    }
}