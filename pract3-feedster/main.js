$(document).ready(() => {

    //MENU
    $('.menu').on('mouseover', () =>{
        $('.nav-menu').show();
    })
    
    $('.nav-menu').on('mouseleave',()=>{
        $('.nav-menu').hide();
    })

    //+1
    $('.btn').on('mouseover', event=>{
        $(event.currentTarget).addClass('btn-hover');
    }).on('mouseleave', event=>{
        $(event.currentTarget).removeClass('btn-hover');
    })

    //Limit 140 chars
    $('.postText').on('keyup', event =>{
        $('.postText').focus();
        const $post = $(event.currentTarget).val();
        const $remaining = 140 - $post.length;
        $('.characters').html($remaining);

        if ($remaining<= 0){
            $('.wordcount').addClass('red');
        }
        else {
            $('.wordcount').removeClass('red');
        }
    })

}); 