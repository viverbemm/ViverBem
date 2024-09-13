// Seleciona o elemento com o ID 'open_btn', que é o botão para abrir/fechar a barra lateral
document.getElementById('open_btn').addEventListener('click', function () {

    // Seleciona o elemento com o ID 'sidebar', que é a barra lateral
    // Em seguida, alterna a classe 'open-sidebar' para abrir ou fechar a barra lateral
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});