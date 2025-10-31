import pandas as pd

def encontrar_linhas_duplicadas(arquivo_excel, nome_da_aba=None):
    if nome_da_aba:
        df = pd.read_excel(arquivo_excel, sheet_name=nome_da_aba)
    else:
        df = pd.read_excel(arquivo_excel)

    duplicados = df[df.duplicated(subset=[df.columns[10]], keep=False)]

    return duplicados

arquivo_excel = "./dadosmaiordoscamposdexml'.xlsx"
linhas_duplicadas = encontrar_linhas_duplicadas(arquivo_excel)

print(linhas_duplicadas)
