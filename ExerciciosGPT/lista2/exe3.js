// Exercício 3: Filtrar Números Pares
// Crie uma função filtrarPares(arr) que recebe um array de números e retorna um novo array contendo apenas os números pares do array original.

function filtrarPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
}