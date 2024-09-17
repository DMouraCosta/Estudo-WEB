let numeroInput = document.getElementById('entradaUser');
let texto = document.getElementById('textoResultado');
let imagem = document.getElementById('imagemResultado');
let bt = document.getElementById('adivinhar');
let somAcerto = document.getElementById('somAcerto');
let somErro = document.getElementById('somErro');
let textoBotao = document.getElementById('textoBotao');

function comparaNumero() {
    let numero = parseInt(numeroInput.value, 10);
    let aleatorio = Math.floor(Math.random() * 10) + 1;

    if (numero == '') {
        alert("Por favor, digite um numero!");

    } else if (numero === aleatorio) {
        texto.textContent = `Parabéns você acertou, eu estava pensando no número ${aleatorio}!`;
        imagem.src = 'img/feliz.png';
        somAcerto.play();
    } else {
        texto.textContent = `Poxa que pena, eu estava pensando no número ${aleatorio}`;
        imagem.src = 'img/triste.png';
        somErro.play();
    }

    textoBotao.textContent = 'Tentar novamente';
    bt.addEventListener('click', () => location.reload());
}

// Adiciona o evento de clique ao botão
bt.addEventListener('click', comparaNumero);
