
import { CodSegurancaSelo } from "../../../entity/entities/CodSegurancaSelo";
import { TblApontamento } from "../../../entity/entities/TblApontamento";
import { Like, Repository } from "typeorm";

export class TblCodSegurancaSeloRepository{
    constructor(private readonly tblCodSegurancaSeloRepository: Repository<CodSegurancaSelo>){}
    
    async insertXmlRemessaSelo(selos:CodSegurancaSelo[]){
        //return this.tblCodSegurancaSeloRepository.insert(selos);
         try {
             while (selos.length > 0) {
                 const lote = selos.splice(0, 200);
    
                await this.tblCodSegurancaSeloRepository.save(lote);
    
                console.log(`Inseridos ${lote.length} registros. Restantes: ${selos.length}`);
             }
    
             console.log('Todos os registros inseridos com sucesso!');
         } catch (error) {
             console.error('Erro ao inserir registros:', error);
         }
    }

    async findSelo(tipoSelo:string,serieSelo:string,codigoSegurancaAntigo:string):Promise<CodSegurancaSelo>{
        return await this.tblCodSegurancaSeloRepository.findOne({
            where:{
                tipo: tipoSelo,
                serie: serieSelo,
                codigoSeguranca: Like(`${codigoSegurancaAntigo}%`)
            }
        });
    }
} 