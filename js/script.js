$(document).ready(function(){

  //AL CLICK RICHIAMO LA FUNZIONE NEX
  $('.next').click(pulsanteNext);

  //AL CLICK RICHIAMO LA FUNZIONE PREV
  $('.prev').click(pulsantePrev);

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


// FUNZIONE PULSANTE PREV
function pulsantePrev(){

  //SCORRIMENTO IMMAGINI
  var imgAttiva = $('.images img.active');
  imgAttiva.removeClass('active');
  imgAttiva.prev().addClass('active');

  //SCORRIMENTO PALLINI
  var pallino = $('.nav i.active');
  pallino.removeClass('active');
  pallino.prev().addClass('active');


  if(imgAttiva.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }
}




//
