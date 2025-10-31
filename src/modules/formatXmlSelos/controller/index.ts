import { FormatXmlService } from "../service/formatXmlService";
import { RemessaController } from "./RemessaController";
import { FormatXmlComEspacoUseCase } from "../useCases/formatXmlComEspacoUseCase.usecase";
import { TblTituloRepository } from "../repository/tblTitulo.repository";
import { AppDataSource } from "../../../config/database/data-source";
import { TblTitulo } from "../../../entity/entities/TblTitulo";
import { Repository } from "typeorm";
import { FormatXmlNumeroOrdemZeroUseCase } from "../useCases/formatXmlNumeroOrdemZeroUseCase";
import { FormatXmlPorFaixaValorUseCase } from "../useCases/formatXmlPorFaixaValorUseCase";
import { TblApontamento } from "../../../entity/entities/TblApontamento";
import { TblApontamentoRepository } from "../repository/tblApontamento.repository";
import { FormatXmlTermoProtocoloUseCase } from "../useCases/formatXmlTermoProtocoloCartorioUseCase";
import { AdicionaEspacoProtocoloUseCase } from "../useCases/AdicionaEspacoProtocoloUseCase";
import { RemoveEspacoProtocoloUseCase } from "../useCases/RemoveEspacoProtocoloUseCase";
import { CorrecaoApontamentoUseCase } from "../useCases/correcaoApontamentoUseCase";
import { CorrecaoNumeroOrdemUseCase } from "../useCases/correcaoNumeroOrdemUseCase";
import { CorrecaoFrjUseCase } from "../useCases/correcaoFrjUseCase";
import { CorrecaoFrcUseCase } from "../useCases/correcaoFrcUseCase";
import { CorrecaoTermoUseCase } from "../useCases/correcaoTermoUseCase";
import { CorrecaoTipoProtocoloUseCase } from "../useCases/correcaoTipoProtocoloUseCase";
import { CorrecaoNotaUseCase } from "../useCases/correcaoNotaUseCase";
import { CorrecaoCodigoNaturezaUseCase } from "../useCases/correcaoCodigoNaturezaUseCase";
import { CorrecaoCodSegurancaUseCase } from "../useCases/correcaoCodSegurancaSeloUseCase";
import { CorrecaoRodapeSeloUseCase } from "../useCases/correcaoRodapeSeloUseCase";
import { CodSegurancaSelo } from "../../../entity/entities/CodSegurancaSelo";
import { TblCodSegurancaSeloRepository } from "../repository/tblCodSegurancaSelo.repository";
import { InsertXmlCargaSelosUseCase } from "../useCases/insertXmlCargaSelosUseCase";
import { CorreCaoAtosAntigosUseCase } from "../useCases/correcaoAtosAntigosUseCase";
import { CorrecaoCodNotaDataRecolhimentoUseCase } from "../useCases/correcaoCodAtoDataRecolhimentoUseCase";
import { TblSeloDigital } from "../../../entity/entities/TblSeloDigital";
import { TblSeloDigitalRepository } from "../repository/tblSeloDigital.repository";
import { FormatXmlSeloUseCase } from "../useCases/formatXmlSeloUseCase";
import { CorrecaoFolhaUseCase } from "../useCases/correcaoFolhaUseCase";
import { CorrecaoLivroUseCase } from "../useCases/correcaoLivroUseCase";
import { ValidaSelosEnviadosUseCase } from "../useCases/validaSelosEnviadosUseCase";
import { CorrecaoSemCodNaturezaUseCase } from "../useCases/CorrecaoSemCodNaturezaUseCase";
import { AlterarDataLoteSeloUseCase } from "../useCases/AlterarDataLoteSeloUseCase";
import { SeparaPrestacaoFinalizadaUseCase } from "../useCases/separaPrestacaoFinalizadaUseCase";
import { AtribuirNovoSeloErro143UseCase } from "../useCases/atribuirNovoSeloErro143UseCase";
import { LocalizaSelosByProcoloUseCase } from "../useCases/localizaSelosByProtocoloUseCase";
import { VerificaSelosInTJPAUseCase } from "../useCases/verificaSelosInTJPAUseCase";
import { CorrecaoCodSegurancaUseCaseSeloXmlLoteUseCase } from "../useCases/correcaoCodSegurancaSeloXmlLoteUseCase";

const tituloDataSourceRepository: Repository<TblTitulo> =
  AppDataSource.getRepository(TblTitulo);
const apontamentoDataSourceRepository: Repository<TblApontamento> =
  AppDataSource.getRepository(TblApontamento);
const tblCodSegurancaSeloDataSourceRepository: Repository<TblSeloDigital> =
  AppDataSource.getRepository(TblSeloDigital);
const tblCodSegSeloDataSourceRepository: Repository<CodSegurancaSelo> =
  AppDataSource.getRepository(CodSegurancaSelo);
const tblTituloRepository = new TblTituloRepository(tituloDataSourceRepository);
const tblSeloDigitalRepository = new TblSeloDigitalRepository(
  tblCodSegurancaSeloDataSourceRepository
);
const tblCodSegurancaSeloRepository = new TblCodSegurancaSeloRepository(
  tblCodSegSeloDataSourceRepository
);
const tblApontamentoRepository = new TblApontamentoRepository(
  apontamentoDataSourceRepository
);
const formatXmlComEspacoUseCase = new FormatXmlComEspacoUseCase(
  tblTituloRepository
);
const formatXmlTermoProtocoloCartorioUseCase =
  new FormatXmlTermoProtocoloUseCase(tblTituloRepository);
const formatXmlNumeroOrdemZeroUseCase = new FormatXmlNumeroOrdemZeroUseCase();
const formatXmlPorFaixaValorUseCase = new FormatXmlPorFaixaValorUseCase(
  tblApontamentoRepository
);
const adicionaEspacoProtocoloUseCase = new AdicionaEspacoProtocoloUseCase();
const removeEspacoProtocoloUseCase = new RemoveEspacoProtocoloUseCase();
const correcaoApontamentoUseCase = new CorrecaoApontamentoUseCase();
const correcaoNumeroOrdemUseCase = new CorrecaoNumeroOrdemUseCase();
const correcaoFrjUseCase = new CorrecaoFrjUseCase();
const correcaoFrcUseCase = new CorrecaoFrcUseCase();
const correcaoTermoUseCase = new CorrecaoTermoUseCase();
const correcaoTipoProtocoloUseCase = new CorrecaoTipoProtocoloUseCase(
  tblTituloRepository
);
const correcaoNotaUseCase = new CorrecaoNotaUseCase();
const correcaoCodigoNaturezaUseCase = new CorrecaoCodigoNaturezaUseCase();
// const correcaoCodSeloUseCase = new CorrecaoCodSegurancaUseCase(tblSeloDigitalRepository);
const correcaoCodSeloUseCase = new CorrecaoCodSegurancaUseCase(
  tblCodSegurancaSeloRepository
);
const correcaoRodapeSeloUseCase = new CorrecaoRodapeSeloUseCase();
const insertXmlCargaSelosUseCase = new InsertXmlCargaSelosUseCase(
  tblCodSegurancaSeloRepository
);
const correcaoAtosAntigosUseCase = new CorreCaoAtosAntigosUseCase();
const correcaoCodNotaDataRecolhimentoUseCase =
  new CorrecaoCodNotaDataRecolhimentoUseCase();
const formatXmlSeloUseCase = new FormatXmlSeloUseCase();
const correcaoFolhaUseCase = new CorrecaoFolhaUseCase();
const correcaoLivroUseCase = new CorrecaoLivroUseCase();
const validaSelosEnviadosUseCase = new ValidaSelosEnviadosUseCase();
const correcaoSemCodNaturezaUseCase = new CorrecaoSemCodNaturezaUseCase();
const alterarDataLoteSeloUseCase = new AlterarDataLoteSeloUseCase();
const separaPrestacaoFinalizadaUseCase = new SeparaPrestacaoFinalizadaUseCase();
const localizaSelosByProcoloUseCase = new LocalizaSelosByProcoloUseCase();
const verificaSelosInTJPAUseCase = new VerificaSelosInTJPAUseCase();
const correcaoCodSegurancaUseCaseSeloXmlLoteUseCase =
  new CorrecaoCodSegurancaUseCaseSeloXmlLoteUseCase(
    tblCodSegurancaSeloRepository
  );

const atribuirNovoSeloErro143UseCase = new AtribuirNovoSeloErro143UseCase(
  tblSeloDigitalRepository
);
const ceiService = new FormatXmlService(
  formatXmlComEspacoUseCase,
  formatXmlNumeroOrdemZeroUseCase,
  formatXmlPorFaixaValorUseCase,
  formatXmlTermoProtocoloCartorioUseCase,
  adicionaEspacoProtocoloUseCase,
  removeEspacoProtocoloUseCase,
  correcaoApontamentoUseCase,
  correcaoNumeroOrdemUseCase,
  correcaoFrjUseCase,
  correcaoFrcUseCase,
  correcaoTermoUseCase,
  correcaoTipoProtocoloUseCase,
  correcaoNotaUseCase,
  correcaoCodigoNaturezaUseCase,
  correcaoCodSeloUseCase,
  correcaoRodapeSeloUseCase,
  insertXmlCargaSelosUseCase,
  correcaoAtosAntigosUseCase,
  correcaoCodNotaDataRecolhimentoUseCase,
  formatXmlSeloUseCase,
  correcaoFolhaUseCase,
  correcaoLivroUseCase,
  validaSelosEnviadosUseCase,
  correcaoSemCodNaturezaUseCase,
  alterarDataLoteSeloUseCase,
  separaPrestacaoFinalizadaUseCase,
  atribuirNovoSeloErro143UseCase,
  localizaSelosByProcoloUseCase,
  verificaSelosInTJPAUseCase,
  correcaoCodSegurancaUseCaseSeloXmlLoteUseCase
);
const remessaController = new RemessaController(ceiService);

export {
  ceiService,
  remessaController,
  formatXmlComEspacoUseCase as arquivoRemessaUseCase,
};
