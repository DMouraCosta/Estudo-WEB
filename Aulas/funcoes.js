// Precisa ser chamada
// Pode ou não receber parametros
// Pode ou não retornar dados

function gerarNome(nome, sobrenome){
    return ('Nome: '+ nome + sobrenome)
}

const nomeGerado = gerarNome('Dailson',' Costa')

console.log(nomeGerado)
