import { Like, Repository } from "typeorm";
import { TblSeloDigital } from "../../../entity/entities/TblSeloDigital";
import { TblSeloUsado } from "../../../entity/entities/TblSeloUsado";

export class TblSeloDigitalRepository {
  constructor(
    private readonly tblSeloUsadoRepository: Repository<TblSeloUsado>
  ) {}

  async registrarSeloUsado(
    protocolo,
    codAto,
    numeroSelo,
    serie,
    codigoSeguranca,
    emolumentos,
    frc,
    frj,
    documentoDevedor,
    tipoSelo,
    valor,
    livro,
    folha,
    dataUso,
    caminhoSelo
  ): Promise<TblSeloUsado> {
    const seloUsado = new TblSeloUsado();
    seloUsado.protocoloCartorio = protocolo;
    seloUsado.codAto = codAto;
    seloUsado.nSelo = numeroSelo;
    seloUsado.serie = serie;
    seloUsado.codSeg = codigoSeguranca;
    seloUsado.emolumentos = emolumentos;
    seloUsado.frc = frc;
    seloUsado.frj = frj;
    seloUsado.documento = documentoDevedor;
    seloUsado.tipoSelo = tipoSelo;
    seloUsado.valor = valor;
    seloUsado.livro = livro;
    seloUsado.folha = folha;
    seloUsado.dataUso = dataUso;
    seloUsado.caminhoSelo = caminhoSelo;
    return await this.tblSeloUsadoRepository.save(seloUsado);
  }
}
