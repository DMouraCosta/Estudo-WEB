// Exercício 1: Contador de Palavras
// Crie uma função contarPalavras(texto) que recebe uma string texto e retorna o número de palavras presentes na string. Considere que as palavras são separadas por espaços.

function contarPalavras(texto){
    const palavras = texto.split(' ').filter(palavra => palavra.length > 0);
    return palavras.length; 
}
