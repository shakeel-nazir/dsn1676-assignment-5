var $form = $('.form');
var $name = $('.name');
var $list = $('.list');

$form.on('submit', function (e) {    
e.preventDefault();

var $li = $('<li>').html($name.val());
var $nameDL = $('<button class="delete">X</button>');
    
$nameDL.on('click', function () {
$li.remove('li'); 
});

$list.on('click', 'li', function () {
$(this).addClass('js-line');
});
    
$li.append($nameDL);
$list.prepend($li);
$name.val('');
});