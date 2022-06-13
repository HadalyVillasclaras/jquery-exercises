$(document).ready(() =>{
    $('#cart').on('mouseover', ()=>{
      $('#cartMenu').show();
    });
    $('#account').on('mouseover', ()=>{
      $('#accountMenu').show();
    });
    $('#help').on('mouseover', ()=>{
      $('#helpMenu').show();
    });
  
    $('.dropdown-menu').on('mouseleave', ()=>{
      $('.dropdown-menu').hide();
    });
  
  });