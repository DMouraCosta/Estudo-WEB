//Ex 1 - Estrutura de decisão

// percorrer uma lista de cidades, contendo: 'São Paulo', 'Rio de Janeiro', 'Florianopolis', 'Recife'. Para cada item, verificar se a cidade Florianopolis está presente na lista, caso esteja avisa, caso não seja o elemento avisar. Numero da execução. Printar o nome da cidade.

// Execução: 1
// Cidade: São Paulo
// Encontrado / Não encontrado

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianopolis', 'Recife']

cidades.forEach((elemento, index)=>{
    console.log('Execução', index+1)
    console.log('Cidade:', elemento)

    if(elemento == 'Florianopolis'){
        console.log('Encontrado')
    }else{
        console.log('Não encontrado')
       
    }
    console.log('--------------')
})