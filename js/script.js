console.log('javascript');

// used for testing jQuery
// $('nav').hide();

//html document must be ready before jQuery trigger any functionality
$(document).ready(function(){
  $('#men, #women, #home').hide();
  $('#fashionNav').click(function(){
    $('#fashion').show();
    $('#men').hide();
    $('#women').hide();
    $('#home').hide();
  });

  $('#menNav').click(function(){
    //chaining
    $(this).css('color','blue')
           .css('background','gray');
    $('#men').show();
    $('#fashion').hide();
    $('#women').hide();
    $('#home').hide();
  });
  $('#womenNav').click(function(){
    $('#women').show();
    $('#fashion').hide();
    $('#men').hide();
    $('#home').hide();
  });
  $('#homeNav').click(function(){
    $('#home').show();
    $('#fashion').hide();
    $('#women').hide();
    $('#men').hide();
  });

  // $("#menNav").click(function(){
  //   //chaining
  //   $(this).css('color','blue')
  //          .css('background','gray');
  // });
  $('nav').hide();
  $('#logo').click(function(){
    $('nav').toggle();
  });

  $('.myCloseBtn').click(function(){
    $('nav').hide();
  });
}); //document.ready
