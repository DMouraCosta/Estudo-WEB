// Exercício 4: Trocar Valores de Propriedades
// Crie uma função trocarPropriedades(obj, prop1, prop2) que recebe um objeto obj e duas strings prop1 e prop2 representando as propriedades do objeto. A função deve trocar os valores das propriedades prop1 e prop2 no objeto.

function trocarPropriedades(obj, prop1, prop2) {
    if (obj.hasOwnProperty(prop1) && obj.hasOwnProperty(prop2)) {
        let temp = obj[prop1];
        obj[prop1] = obj[prop2];
        obj[prop2] = temp;
    } else {
        console.log('Uma ou ambas as propriedades não existem no objeto.');
    }
    return obj;
}

// Teste da função
const pessoa = { nome: 'Ana', idade: 25 };
console.log(trocarPropriedades(pessoa, 'nome', 'idade'));  // { nome: 25, idade: 'Ana' }
