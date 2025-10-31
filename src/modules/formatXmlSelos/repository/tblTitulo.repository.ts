
import { TblTitulo } from "../../../entity/entities/TblTitulo";
import { Repository } from "typeorm";

export class TblTituloRepository{
    constructor(private readonly tblTituloRepository: Repository<TblTitulo>){}

    async findTituloByProtocoloCartorio(protocoloCartorio:number){
        return await this.tblTituloRepository.findOne({
            where: {
              protocoloCartorio: protocoloCartorio
            }
          })
    }

    async findTituloByProtocoloDistribuidor(protocoloCartorio:number){
      return await this.tblTituloRepository.findOne({
          where: {
            protocoloDist: protocoloCartorio
          }
        })
    }
} 