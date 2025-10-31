const fs = require("fs");
const xml2js = require("xml2js");

// Função para alterar o valor de <NumeroProcedimentos>
function alterarNumeroProcedimentos(xmlString) {
  // Parse o XML para objeto JavaScript
  xml2js.parseString(xmlString, (err, result) => {
    if (err) {
      console.error("Erro ao interpretar XML:", err);
      return;
    }

    // Percorre o objeto e altera o valor de <NumeroProcedimentos>
    const atosPraticados = result.PrestacaoContas.AtoPraticado;
    atosPraticados.forEach((ato) => {
      if (ato.NumeroProcedimentos && ato.NumeroProcedimentos.length > 0) {
        // Obtém o valor existente
        const valorAtual = parseFloat(ato.NumeroProcedimentos[0]);

        // Reduz o valor do objeto pela metade e arredonda para o inteiro mais próximo
        const novoValor = Math.round(valorAtual / 2);

        // Atualiza o valor no objeto
        ato.NumeroProcedimentos[0] = novoValor.toString();
      }
    });

    // Converte o objeto de volta para XML
    const builder = new xml2js.Builder();
    const xmlModificado = builder.buildObject(result);

    // Exibe o XML modificado
    console.log(xmlModificado);

    // Opcional: salvar o XML modificado em um arquivo
    fs.writeFile("arquivo_modificado.xml", xmlModificado, (err) => {
      if (err) {
        console.error("Erro ao salvar o arquivo XML modificado:", err);
      } else {
        console.log("Arquivo XML modificado salvo com sucesso!");
      }
    });
  });
}

// Exemplo de XML original
const xmlOriginal = `<?xml version="1.0" encoding="ISO-8859-1"?>
<PrestacaoContas> 
 <Cabecalho> 
  <CodigoComarca>1</CodigoComarca>
  <CodigoCartorio>244</CodigoCartorio>
  <DataTransmissao>20062024</DataTransmissao>
  <HoraTransmissao>134147</HoraTransmissao>
  <MesAnoLote>062024</MesAnoLote>
 </Cabecalho> 
 <AtoPraticado>
  <SequencialAto>1</SequencialAto>
  <CodigoAto>910</CodigoAto>
  <VersaoTabela>2024</VersaoTabela>
  <DataRecolhimento>20062024</DataRecolhimento>
  <ValorTransacao>4882.36</ValorTransacao>
  <ValorEmolumento>138.37</ValorEmolumento>
  <ValorFRJ>20.76</ValorFRJ>
  <ValorFRC>3.46</ValorFRC>
  <NaturezaAto>1055</NaturezaAto>
  <Titulo>25656003</Titulo>
  <DataVencimentoTitulo>25022024</DataVencimentoTitulo>
  <Livro>1789</Livro>
  <FolhaOuFicha>78</FolhaOuFicha>
  <NumeroProcedimentos>15</NumeroProcedimentos>
  <SelosAto>
   <SequencialAto>1</SequencialAto>
   <CodigoSelo>3094587</CodigoSelo>
   <Tipo>101</Tipo>
   <Serie>A</Serie>
   <CodigoSeguranca>78549030000077171214210160</CodigoSeguranca>
  </SelosAto>
  <PessoasAto>
   <SequencialAto>1</SequencialAto>
   <NumeroDocumento>41821677000178</NumeroDocumento>
   <TipoDocumento>2</TipoDocumento>
   <TipoParticipacao>1001</TipoParticipacao>
   <NomePessoa>BIO IMPLANTES COMERCIO DE BIOMATERIAIS E</NomePessoa>
  </PessoasAto>
 </AtoPraticado>
 <Rodape>
  <QuantidadeAtos>1</QuantidadeAtos>
  <QuantidadeSelos>1</QuantidadeSelos>
  <ValorTotalTransacao>4882.36</ValorTotalTransacao>
  <ValorTotalEmolumentos>138.37</ValorTotalEmolumentos>
  <ValorTotalFRJ>20.76</ValorTotalFRJ>
  <ValorTotalFRC>3.46</ValorTotalFRC>
 </Rodape>
</PrestacaoContas>`;

// Altere o valor da tag <NumeroProcedimentos> para a metade do valor atual
alterarNumeroProcedimentos(xmlOriginal);
