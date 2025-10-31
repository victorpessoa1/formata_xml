
import { TblApontamento } from "../../../entity/entities/TblApontamento";
import { Repository } from "typeorm";

export class TblApontamentoRepository{
    constructor(private readonly tblApontamentoRepository: Repository<TblApontamento>){}
    
    async findFaixaApontamento(){
        return this.tblApontamentoRepository.find();
    }
} 