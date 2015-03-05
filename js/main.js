var $form = $('.form');
var $name = $('.name');
var $list = $('.list');


$form.on('submit', function (e) {    

    e.preventDefault();

   
    var $li = $('<li>').html($name.val());

    var $button = $('<button class="x">X</button>' );
 
    $li.append($button);
    $list.append($li);
    $name.val('');
    
});

    $list.on('click',"li", function () {

    $(this).toggleClass('js-highlight');
    
});