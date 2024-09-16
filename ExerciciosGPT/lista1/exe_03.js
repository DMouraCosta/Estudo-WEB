// Gerador de Números Aleatórios:

// Crie uma função gerarNumeroAleatorio(min, max) que retorna um número inteiro aleatório entre min (inclusive) e max (inclusive).

// Teste a função gerando 10 números aleatórios entre 1 e 100 e imprima os resultados no console.


function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(gerarNumeroAleatorio(2, 100))