$(document).ready(function () {
  // Mostrar o pop-up somente quando um cartão for clicado
  $('.video-card').on('click', function () {
    const videoSrc = $(this).data('video'); // Obtém a URL do vídeo

    // Verificar se a URL é do YouTube (incluindo youtube.com/embed e youtube-nocookie.com)
    const isYoutube = videoSrc.includes('youtube.com/embed') || videoSrc.includes('youtube-nocookie.com');

    if (videoSrc) {
      if (isYoutube) {
        // Se for um vídeo do YouTube, insira o iframe
        $('#video-iframe').attr('src', videoSrc); // Define a URL do YouTube no iframe
        $('#video-container').hide(); // Esconde o contêiner do player de vídeo
        $('#youtube-container').show(); // Exibe o contêiner do iframe
      } else {
        // Se for um vídeo MP4, exibe o player HTML5
        $('#video-player').attr('src', videoSrc); // Define a URL do MP4 no player
        $('#video-player')[0].load(); // Recarrega o player para carregar o vídeo
        $('#youtube-container').hide(); // Esconde o iframe
        $('#video-container').show(); // Exibe o player de vídeo
      }

      $('#video-popup').fadeIn(); // Exibe o pop-up
    }
  });

  // Fechar o pop-up ao clicar no botão "fechar"
  $('.close-btn').on('click', function () {
    $('#video-popup').fadeOut(); // Esconde o pop-up
    $('#video-player')[0].pause(); // Pausa o vídeo (se MP4)
    $('#video-iframe').attr('src', ''); // Remove o vídeo do YouTube
    $('#youtube-container').hide(); // Esconde o iframe
    $('#video-container').hide(); // Esconde o player de vídeo
  });

  // Fechar o pop-up ao clicar fora do conteúdo
  $('#video-popup').on('click', function (e) {
    if ($(e.target).is('#video-popup')) {
      $('#video-popup').fadeOut(); // Esconde o pop-up
      $('#video-player')[0].pause(); // Pausa o vídeo (se MP4)
      $('#video-iframe').attr('src', ''); // Remove o vídeo do YouTube
      $('#youtube-container').hide(); // Esconde o iframe
      $('#video-container').hide(); // Esconde o player de vídeo
    }
  });
});
