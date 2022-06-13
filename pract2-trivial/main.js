$(document).ready(() =>{
    $('.hint-box').on('click', ()=>{
      $('.hint').slideToggle(500);
      $('.frown').show();
    });

    $('.wrong-answer-one').on('click', ()=>{
      $('.wrong-text-one').fadeOut('slow');
      $('.frown').show();
    });
    $('.wrong-answer-two').on('click', ()=>{
      $('.wrong-text-two').fadeOut('slow');
      $('.frown').show();
    });
    $('.wrong-answer-three').on('click', ()=>{
      $('.wrong-text-three').fadeOut('slow');
      $('.frown').show();
    });
    $('.correct-answer').on('click', ()=>{
      $('.frown').hide();
      $('.smiley').show();
      $('.wrong-text-one, .wrong-text-two, .wrong-text-three').fadeOut('slow');
      $('.next-box').show();
    });


    //reset
    $('.reset').on('click', ()=>{
        $('.wrong-text-one, .wrong-text-two, .wrong-text-three').show();
        $('.smiley, .frown').hide();

    });

    //next
    $('.next').on('click', ()=>{
        $('.card1').hide();
        $('.card2').show();
        $('.wrong-text-one, .wrong-text-two, .wrong-text-three').show();
        $('.smiley, .frown').hide();

    })


});