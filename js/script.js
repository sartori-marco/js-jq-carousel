$(document).ready(function(){

  //AL CLICK RICHIAMO LA FUNZIONE
  $('.next').click(pulsanteNext);

});






// FUNZIONE PULSANTE NEXT
function pulsanteNext(){
  var imgAttiva = $('.images img.active');

  imgAttiva.removeClass('active');
  imgAttiva.next().addClass('active');


  if(imgAttiva.hasClass('last')){
    $('.images img.first').addClass('active');
  }

}
