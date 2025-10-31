import { Like, Repository } from "typeorm";
import { TblSeloDigital } from "../../../entity/entities/TblSeloDigital";
import { CodSegurancaSelo } from "../../../entity/entities/CodSegurancaSelo";

export class TblSeloDigitalRepository {
  constructor(
    private readonly tblSeloDigitalRepository: Repository<TblSeloDigital>
  ) {}

  async findSelo(
    tipoSelo: string,
    serieSelo: string,
    codigoSegurancaAntigo: string
  ): Promise<TblSeloDigital> {
    return await this.tblSeloDigitalRepository.findOne({
      where: {
        tipo: tipoSelo,
        serie: serieSelo,
        codSeguranca: Like(`${codigoSegurancaAntigo}%`),
      },
    });
  }

  async atribuirProtocolo(protocolo, docDevedor): Promise<TblSeloDigital> {
    const selo = await this.tblSeloDigitalRepository.findOne({
      where: {
        dataUso: null,
        dataUso1: null,
        usado: false,
        protocolo: null,
        documento: null,
      },
    });
    selo.dataUso = new Date("2024-07-15");
    selo.dataUso1 = new Date("2024-07-15");
    selo.usado = true;
    selo.protocolo = protocolo;
    selo.documento = docDevedor;
    return await this.tblSeloDigitalRepository.save(selo);
  }
}
