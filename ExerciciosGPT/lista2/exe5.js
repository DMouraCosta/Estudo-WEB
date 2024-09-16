// Exercício 5: Manipulação de Data
// Crie uma função formatarData(data) que recebe um objeto data do tipo Date e retorna a data formatada como DD/MM/YYYY. Por exemplo, se a data for 10 de setembro de 2024, a função deve retornar 10/09/2024.

function formatarData(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); 
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

// Teste da função
const data = new Date(2024, 8, 10); // 10 de setembro de 2024
console.log(formatarData(data));  // 10/09/2024
