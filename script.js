$(document).ready(function () {
  // Mostrar o pop-up somente quando um cartão for clicado
  $('.video-card').on('click', function () {
    const videoSrc = $(this).data('video'); // Obtém a URL do vídeo
    if (videoSrc) {
      $('#video-player source').attr('src', videoSrc); // Insere a URL no <source>
      $('#video-player')[0].load(); // Recarrega o player para carregar o vídeo
      $('#video-popup').fadeIn(); // Exibe o pop-up
    }
  });

  // Fechar o pop-up ao clicar no botão "fechar"
  $('.close-btn').on('click', function () {
    $('#video-popup').fadeOut(); // Esconde o pop-up
    $('#video-player')[0].pause(); // Pausa o vídeo
  });

  // Fechar o pop-up ao clicar fora do conteúdo
  $('#video-popup').on('click', function (e) {
    if ($(e.target).is('#video-popup')) {
      $('#video-popup').fadeOut(); // Esconde o pop-up
      $('#video-player')[0].pause(); // Pausa o vídeo
    }
  });
});
