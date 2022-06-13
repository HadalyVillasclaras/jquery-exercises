$(document).ready(() => {
  //el valor actual del text area (#text) será el valor de .preview
    $('#text').on('keyup', event =>{
      $('.preview').html($(event.currentTarget).val());
  })

  //cuando el valor de #font cambie (se seleccione un option diferente, este sera el valor de fontfamily de .preview)
  $('#font').on('change', event =>{
    $('.preview').css('fontFamily', $(event.currentTarget).val())
  })

  //change menu

  $('#weight').on('change', event =>{
      $('.preview').css('fontWeight',  $(event.currentTarget).val())
  })

  //size

  $('#size').on('keyup', event =>{ 
    const $fontSize = $(event.currentTarget).val() + 'px';
    $('.preview').css('fontSize', $fontSize);
  })


})