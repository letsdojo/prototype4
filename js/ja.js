//play the English audio on load

$intro = $('#instruct');
$english = $('#audioYes');

$intro.on('load', $intro.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1300));


//highlight the words as they are spoken


$i = $("#yes");
$du = $("#ja");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1300));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2100));

$du.on('load', setTimeout(function() {
    $du.addClass("blue");
}, 2900));

$du.on('load', setTimeout(function() {
    $du.removeClass("blue");
}, 3500));

//play the Danish audio 1.7 seconds after load


$danish = $('#audioJa');

$danish.on('load', setTimeout(function() {
    $danish.trigger("play");
}, 2900));


//play Danish audio when the words are clicked


$du.on('click', function() {
    $danish.trigger("play");
});


//play Danish audio when users click the play button


$('#play').on('click', function() {
    $danish.trigger("play");
});


//adjust the progress bar


$('#bar').css('width', '171px');