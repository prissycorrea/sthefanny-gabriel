var flkty = new Flickity('.carousel', {
    wrapAround: true,   // Permite que o carrossel tenha uma rotação infinita
    autoPlay: 3000,     // Reproduz automaticamente com um delay de 3 segundos
    pauseAutoPlayOnHover: false, // Mantém o autoplay mesmo ao passar o mouse
    imagesLoaded: true, // Garante que as imagens sejam carregadas corretamente antes de iniciar
    pageDots: true,     // Mostra os pontos de navegação
    prevNextButtons: true, // Mostra botões de navegação anterior e próximo
});
