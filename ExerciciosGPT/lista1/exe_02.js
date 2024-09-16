// Verificador de Número Primo:

// Crie uma função ehPrimo(num) que recebe um número num como argumento e retorna true se num for primo e false caso contrário. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.

// Teste a função com diversos números para verificar se ela identifica corretamente os números primos.

function ehprimo(num){
    if (num <= 1) return 'Não é primo';

    for (let i =2; i*i <= num; i++){
        if(num % i === 0) return 'Não é primo'
    }

    return 'É primo'
}

console.log(ehprimo(4))