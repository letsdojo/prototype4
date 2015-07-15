//play the English audio on load

$intro = $('#instruct');
$english = $('#audioI');

$intro.on('load', $intro.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1700));


//highlight the words as they are spoken

$i = $("#i");
$jeg = $("#jeg");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1700));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2400));

$jeg.on('load', setTimeout(function() {
    $jeg.addClass("blue");
}, 2600));

$jeg.on('load', setTimeout(function() {
    $jeg.removeClass("blue");
}, 3300));

//play the Danish audio 2.6 seconds after load


$danish = $('#audioJeg');

$danish.on('load', setTimeout(function() {
    $('#audioJeg').trigger("play");
}, 2600));


//play Danish audio when the words are clicked


$jeg.on('click', function() {
    $('#audioJeg').trigger("play");
});


//play Danish audio when users click the play button


$('#play').on('click', function() {
    $danish.trigger("play");
});


//adjust the progress bar


$('#bar').css('width', '9px');