export class XmlSeloDTO {
    constructor(
        public PrestacaoContas:{
            Cabecalho:{
                CodigoComarca: string,
                CodigoCartorio: string,
                DataTransmissao: string,
                HoraTransmissao: string,
                MesAnoLote: string,
            },
            AtoPraticado:{
                SequencialAto: string,
                CodigoAto: string,
                VersaoTabela: string,
                DataRecolhimento: string,
                ValorTransacao: string,
                ValorEmolumento: string,
                ValorFRJ: string,
                ValorFRC: string,
                NaturezaAto: string,
                Titulo: string,
                DataVencimentoTitulo: string,
                Livro: string,
                FolhaOuFicha: string,
                Termo: string,
                Nota: string,
                Protocolo: string,
                Apontamento: string,
                Certidao: string,
                NumeroOrdem: string,
                NumeroProcedimentos: string,
                SelosAto:{
                    SequencialAto: string,
                    CodigoSelo: string,
                    Tipo: string,
                    Serie: string,
                    CodigoSeguranca: string,
                },
                PessoasAto:{
                    SequencialAto: string,
                    NumeroDocumento: string,
                    TipoDocumento: string,
                    TipoParticipacao: string,
                    NomePessoa: string,
                },
                AtoPraticadoFilho: string,
            },
            Rodape:{
                QuantidadeAtos:string,
                QuantidadeSelos:string,
                ValorTotalTransacao:string,
                ValorTotalEmolumentos:string,
                ValorTotalFRJ:string,
                ValorTotalFRC:string,
            }
        }
    ){}
}