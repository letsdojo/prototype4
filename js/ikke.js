//play the English audio on load

$intro = $('#instruct');
$english = $('#audioNot');

$intro.on('load', $intro.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1300));


//highlight the words as they are spoken


$i = $("#not");
$ikke = $("#ikke");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1300));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2000));

$ikke.on('load', setTimeout(function() {
    $ikke.addClass("blue");
}, 2300));

$ikke.on('load', setTimeout(function() {
    $ikke.removeClass("blue");
}, 3000));


//play the Danish audio 1.7 seconds after load


$danish = $('#audioIkke');

$danish.on('load', setTimeout(function() {
    $danish.trigger("play");
}, 2300));


//play Danish audio when the words are clicked


$ikke.on('click', function() {
    $danish.trigger("play");
});


//play Danish audio when users click the play button


$('#play').on('click', function() {
    $danish.trigger("play");
});


//adjust the progress bar


$('#bar').css('width', '72px');