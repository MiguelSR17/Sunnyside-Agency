const hamburger = document.getElementById('hamburger');

function toggleMenu () {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active')
  // classList = classes do elemento navMobile
  // toggle = adicione uma classe caso não tenha e remova caso tenha
}

hamburger.addEventListener('touchstart', toggleMenu);
/* Adiciona a função 'hamburger' o evento touchstart, esse evento faz com que quando o 
usuário pressionar o elemento, o código detecte isso e mande o resultado para uma função 
que nós definimos, neste caso é o 'toggleMenu' */

if ($(window).width() > 768 ) {

  var wTOheightONE = $('.container-child').width();
    $('.container-child').css({
        'height': wTOheightONE + 'px'
  });

}

if ($(window).width() <= 768 ) {

  var wTOheightTWO = $('.gallery-images').width();
    $('.gallery-images').css({
        'height': wTOheightTWO + 'px'
  });

}