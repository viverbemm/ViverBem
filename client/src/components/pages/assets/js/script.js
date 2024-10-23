function menuShow() {
    // Define uma função chamada 'menuShow' que será chamada quando o ícone do menu mobile for clicado.

    let menuMobile = document.querySelector('.mobile-menu');
    // Seleciona o elemento HTML com a classe 'mobile-menu' e o armazena na variável 'menuMobile'.

    if (menuMobile.classList.contains('open')) {
        // Verifica se o elemento 'menuMobile' possui a classe 'open'.
        // Se a classe 'open' estiver presente, isso significa que o menu mobile está visível.

        menuMobile.classList.remove('open');
        // Se a classe 'open' estiver presente, ela será removida, ocultando o menu mobile.

        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
        // Altera a imagem do ícone de volta para o ícone de menu (menu hambúrguer) quando o menu mobile é fechado.
    } else {
        // Se a classe 'open' não estiver presente, isso significa que o menu mobile está oculto.

        menuMobile.classList.add('open');
        // Adiciona a classe 'open' ao elemento 'menuMobile', exibindo o menu mobile.

        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
        // Altera a imagem do ícone para o ícone de "fechar" quando o menu mobile é aberto.
    }
}