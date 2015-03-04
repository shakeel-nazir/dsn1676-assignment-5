var $form = $('.form');
var $name= $('.name');
var $list= $('.list');


$form.on('submit', function (e) {    
e.preventDefault();

   
    var $li = $('<li>');
    var $nameH2 = $('<h2>').html($name.val());
    var button = $<'button class="x">X</button>');
    
    $li.append($nameH2);
    $li.append($button)
    $list.append($li);
    
});