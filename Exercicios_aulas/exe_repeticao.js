//Ex 1 - Estrutura de repetição

// Percorrer uma lista de nomes, contendo os nomes: Eduardo, Maria João e Francisco. Colocando o numero da execução começando em 1, nome que está sendo executado, colocando separadores.

const nomes = ['Eduardo', 'Maria', 'João', 'Francisco']

for (let index = 0; index < nomes.length; index++) {
    console.log('Execução: ', index+1)
    console.log('nome: ', nomes[index])
    console.log('----------------')
    
}