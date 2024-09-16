
// JavaScript: Implementar a interação do menu. Ao passar o mouse ou clicar em "Serviços", exibir o submenu. O submenu deve desaparecer quando o mouse sair ou clicar fora.
// Dicas:
// Use eventos como mouseover, mouseout, click para controlar a exibição dos submenus.
// Use CSS para definir animações simples no menu (por exemplo, transição suave ao exibir/esconder os submenus).

// Seleciona todos os itens de menu que possuem submenus
let menuItems = document.querySelectorAll('.menu li');

// Adiciona eventos a cada item de menu que tenha um submenu
menuItems.forEach(item => {
    // Verifica se o item tem um submenu
    let submenu = item.querySelector('ul');

    if (submenu) {
        // Evento para quando o mouse passar sobre o item
        item.addEventListener('mouseover', () => {
            submenu.style.display = 'block'; // Mostra o submenu
        });

        // Evento para quando o mouse sair do item
        item.addEventListener('mouseout', () => {
            submenu.style.display = 'none'; // Esconde o submenu
        });

        // Evento de clique para mostrar/esconder o submenu em dispositivos móveis
        item.addEventListener('click', (event) => {
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none'; // Esconde o submenu se ele estiver aberto
            } else {
                submenu.style.display = 'block'; // Mostra o submenu se ele estiver fechado
            }

            // Evita que o clique no item de menu principal afete a navegação
            event.preventDefault();
        });
    }
});
