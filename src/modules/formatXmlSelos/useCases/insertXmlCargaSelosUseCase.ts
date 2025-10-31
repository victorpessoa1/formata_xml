const path = require('path');
import fs from 'fs';
import * as xml2js from 'xml2js';
import { TblCodSegurancaSeloRepository } from '../repository/tblCodSegurancaSelo.repository';
import {CodSegurancaSelo } from '../../../entity/entities/CodSegurancaSelo';


export class InsertXmlCargaSelosUseCase {

  constructor(private readonly tblCodSegurancaSeloRepository: TblCodSegurancaSeloRepository){}

    async handle(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const arquivosXmlCarregamentoSelo = fs.readdirSync(`${__dirname}../../../../xml_import_selos`);

            for (const arquivoSeloXml of arquivosXmlCarregamentoSelo) {
                try{
                    if (path.extname(arquivoSeloXml) === '.xml') {
                        const xmlCargaSelosFilePath = path.join(`${__dirname}../../../../xml_import_selos`, arquivoSeloXml);

                        const dadosCargaSelosXML = fs.readFileSync(xmlCargaSelosFilePath, 'utf-8');

                        xml2js.parseString(dadosCargaSelosXML,async (err, result) => {
                            if (err) {
                                console.error(`Erro ao analisar XML ${path.basename(arquivoSeloXml)}:`, err);
                            } else {
                                const selos = result.Cabecalho.Selos[0].Selo;
                                const selosEntity:CodSegurancaSelo[] = selos.map((selo)=>{
                                    return{
                                        codigoSelo: selo.CodigoSelo[0],
                                        tipo: selo.Tipo[0],
                                        serie: selo.Serie[0],
                                        codigoSeguranca: selo.CodigoSeguranca[0],
                                        nomeArquivo:path.basename(arquivoSeloXml)
                                    }
                                });
                                
                                await this.tblCodSegurancaSeloRepository.insertXmlRemessaSelo(selosEntity);
                                console.log(path.basename(arquivoSeloXml))
                                // for(const selo of selos){
                                //     if(selo.CodigoSelo[0] === codigoSelo &&
                                //       selo.Tipo[0] === tipoSelo &&
                                //       selo.Serie[0] === serieSelo[0] &&
                                //       selo.CodigoSeguranca[0].includes(codigoSegurancaAntigo)
                                //       ){
                                //         codigoSegurancaAtt = selo.CodigoSeguranca[0];
                                //     }
                                // }
                            }
                        });
                    }
                }catch(error){
                  console.log(error)
                }
            }
        });
    }
}