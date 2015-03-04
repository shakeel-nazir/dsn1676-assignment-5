var $theCircle = $('.circle');


var $form = $('form');
var $input = $('#the-color');
var $list = $('.list')




$form.on('submit', function (eventObject) {

    eventObject.preventDefault();
    
    var $theli= $('<li>').html($input.val() + '<button class="x">x</button>');
    
    $theCircle.prepend($theli);
    $input.val('');
    
    
});

    $form.on('click', 'li', function () {
      $(this).toggleClass('js-line')
      
});

$list.on('click', 'button', function () {
    $(this).parent().remove();
})

