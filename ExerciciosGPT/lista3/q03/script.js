// JavaScript: Implementar a lógica de adicionar tarefas à lista, marcar tarefas como concluídas ou não, remover tarefas e aplicar os filtros (todos, concluídos, não concluídos).
// Dicas:
// Use localStorage para salvar as tarefas e persistir os dados, mesmo após recarregar a página.
// Utilize classes CSS para aplicar diferentes estilos a tarefas concluídas.


let ul = document.getElementById('listaTarefas');
let bt = document.getElementById('adicionar');
let tarefa = document.getElementById('novaTarefa');

bt.addEventListener('click', function addTarefa() {
    if (tarefa.value != '') {
        let li = document.createElement('li');
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        li.appendChild(checkbox);
        
        let textoItem = document.createTextNode(tarefa.value);
        
        li.appendChild(textoItem);
        
        // Adiciona o novo <li> no topo da lista
        ul.insertBefore(li, ul.firstChild);

        alert("Nova tarefa adicionada!");
        tarefa.value = ''; 
    } else {
        alert("Campo Nova tarefa não pode estar Vazio!");
    }
});


// Filtros------------------------------------------------------------

let todas = document.getElementById('todos');
let conc = document.getElementById('concluidos');
let nConc = document.getElementById('nConcluidos');


function mostrarTodasTarefas() {
    let itens = ul.getElementsByTagName('li');
    for (let i = 0; i < itens.length; i++) {
        itens[i].style.display = 'list-item';
    }
}


function mostrarConcluidos() {
    let itens = ul.getElementsByTagName('li');
    for (let i = 0; i < itens.length; i++) {
        let checkbox = itens[i].getElementsByTagName('input')[0];
        if (checkbox.checked) {
            itens[i].style.display = 'list-item';
        } else {
            itens[i].style.display = 'none';
        }
    }
}


function mostrarNaoConcluidos() {
    let itens = ul.getElementsByTagName('li');
    for (let i = 0; i < itens.length; i++) {
        let checkbox = itens[i].getElementsByTagName('input')[0];
        if (checkbox.checked) {
            itens[i].style.display = 'none';
        } else {
            itens[i].style.display = 'list-item';
        }
    }
}


function atualizarFiltro() {
    if (conc.checked) {
        mostrarConcluidos();
    } else if (nConc.checked) {
        mostrarNaoConcluidos();
    } else {
        mostrarTodasTarefas(); 
    }
}


todas.addEventListener('change', atualizarFiltro);
conc.addEventListener('change', atualizarFiltro);
nConc.addEventListener('change', atualizarFiltro);



