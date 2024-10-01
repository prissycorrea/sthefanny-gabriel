function initMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuWrapper = document.querySelector('.menuWrapper');
    const menuLinks = document.querySelectorAll('.menuWrapper ul li a');

    // Verifica se os elementos existem na página atual
    if (menuToggle && menuWrapper) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            menuWrapper.classList.toggle('active');
        });

        // Adiciona o evento de clique aos links do menu
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // Verifica se o menu está aberto e se estamos no mobile
                if (menuWrapper.classList.contains('active') && window.innerWidth <= 767) {
                    menuToggle.classList.remove('active');
                    menuWrapper.classList.remove('active');
                }
            });
        });
    }
}
