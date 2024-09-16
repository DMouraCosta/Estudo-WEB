// JavaScript: Implementar a lógica de validação dos campos. Verificar se os campos de senha e confirmação de senha são iguais, se o email está no formato correto e se os campos não estão vazios. Exibir mensagens de erro quando necessário e evitar o envio do formulário caso haja erros.
// Dicas:
// Utilize expressões regulares para validar o email.
// Faça a validação em tempo real, enquanto o usuário digita.

let labelErro;


// Validando nome---------------------------------------------------------

let nomeValor = document.getElementById('nome');

function validaNome(){


    if(nomeValor.value != null && nomeValor.value.length > 4){

        nomeValor.style.borderColor = 'green';

        if (labelErro) {
            labelErro.remove(); 
            labelErro = null;
          }

    }else{
        nomeValor.style.borderColor = 'red';

        if (!labelErro) {
            labelErro = document.createElement('label');
            labelErro.textContent = 'O nome precisa ter no minimo 5 caracteres!';
            labelErro.style.color = 'red';
            nomeValor.after(labelErro);
        }

    }

}

nomeValor.addEventListener('input', validaNome);

// Validando senha---------------------------------------------------------
let senhaValor = document.getElementById('senha');

function validaSenha(){

    if(senhaValor.value != null && senhaValor.value.length > 5){
        senhaValor.style.borderColor = 'green';
        if (labelErro) {
            labelErro.remove(); 
            labelErro = null;
          }

    }else{
        senhaValor.style.borderColor = 'red';

        if (!labelErro) {
            labelErro = document.createElement('label');
            labelErro.textContent = 'A senha precisa ter no minimo 6 caracteres!';
            labelErro.style.color = 'red';
            senhaValor.after(labelErro);
        }

    }

}

senhaValor.addEventListener('input', validaSenha);

// comparando senhas---------------------------------------------------------

let confSenhaValor = document.getElementById('confSenha');

function comparaSenha(){
    if(confSenhaValor != null && confSenhaValor.value === senhaValor.value){
        confSenhaValor.style.borderColor = 'green';
        if (labelErro) {
            labelErro.remove(); 
            labelErro = null;
          }

    }else{
        confSenhaValor.style.borderColor = 'red';

        if (!labelErro) {
            labelErro = document.createElement('label');
            labelErro.textContent = 'As senhas não correspondem!';
            labelErro.style.color = 'red';
            confSenhaValor.after(labelErro);
        }

    }
    
}

confSenhaValor.addEventListener('input', comparaSenha);


// Validando e-mail---------------------------------------------------------
let emailValor = document.getElementById('email');

function validarEmail() {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(regex.test(emailValor.value)){

        emailValor.style.borderColor = 'green';

        if (labelErro) {

            labelErro.remove(); 
            labelErro = null;

          }

    }else{

        emailValor.style.borderColor = 'red';

        if (!labelErro) {
            labelErro = document.createElement('label');
            labelErro.textContent = 'E-mail inválido';
            labelErro.style.color = 'red';
            emailValor.after(labelErro);
        }

    }
}

emailValor.addEventListener('input', validarEmail);



// enviar formulario---------------------------------------------------------

let enviarBt = document.getElementById('enviar');


function enviaForm(){

    let div = document.getElementById('form');

    let inputs = div.querySelectorAll('input');

    let todosPreenchidos = true;

    inputs.forEach(function(input) {
        if (input.value.trim() === '') {
            todosPreenchidos = false;
            
        } else{
            
        }
    });


    if(todosPreenchidos == true){
        alert("Cadastro Realizado!");
        location.reload();
    }else{
        alert("Preencha todos os campos corretamente!");

    }

}

enviarBt.addEventListener('click', enviaForm);