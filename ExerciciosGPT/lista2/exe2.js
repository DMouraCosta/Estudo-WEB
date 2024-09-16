// Exercício 2: Validação de Email
// Crie uma função validarEmail(email) que recebe uma string email e retorna true se o email for válido e false caso contrário. Um email válido deve conter um caractere @ e um ponto . após o @. Não se preocupe com validações mais complexas.

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

console.log(validarEmail('dailson100@gmail.com'))


