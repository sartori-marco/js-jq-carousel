$(document).ready(function(){

  //AL CLICK RICHIAMO LA FUNZIONE
  $('.next').click(pulsanteNext);

});






// FUNZIONE PULSANTE NEXT
function pulsanteNext(){
  //SCORRIMENTO IMMAGINI
  var imgAttiva = $('.images img.active');
  imgAttiva.removeClass('active');
  imgAttiva.next().addClass('active');

  //SCORRIMENTO PALLINI
  var pallino = $('.nav i.active');
  pallino.removeClass('active');
  pallino.next().addClass('active');



  if(imgAttiva.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }

}
