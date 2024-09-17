let numeroInput = document.getElementById('entradaUser');
let texto = document.getElementById('textoResultado');
let imagem = document.getElementById('imagemResultado');
let bt = document.getElementById('adivinhar');
let somAcerto = document.getElementById('somAcerto');
let somErro = document.getElementById('somErro');
let textoBotao = document.getElementById('textoBotao');

// Gera o número aleatório fora da função
let aleatorio = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let maxTentativas = 3;

function comparaNumero() {
    let numero = parseInt(numeroInput.value, 10);

    // Verifica se o input é válido
    if (isNaN(numero) || numero < 1 || numero > 10) {
        alert("Por favor, digite um número entre 1 e 10!");
        return;
    }

    tentativas++;

    // Verifica se acertou ou errou
    if (numero === aleatorio) {
        texto.textContent = `Parabéns, você acertou! O número era ${aleatorio}.`;
        imagem.src = 'img/feliz.png';
        somAcerto.play();
        bt.disabled = true;  // Desabilita o botão após o acerto
    } else if (tentativas < maxTentativas) {
        texto.textContent = `Poxa você errou! Você ainda tem ${maxTentativas - tentativas} tentativas.`;
        imagem.src = 'img/triste.png';
        somErro.play();
    } else {
        texto.textContent = `Poxa, suas tentativas acabaram. O número era ${aleatorio}.`;
        imagem.src = 'img/triste.png';
        somErro.play();
        bt.disabled = true;  // Desabilita o botão após esgotar tentativas
    }

    // Atualiza o texto do botão
    textoBotao.textContent = 'Tentar novamente';
}

// Adiciona o evento de clique ao botão
bt.addEventListener('click', comparaNumero);
