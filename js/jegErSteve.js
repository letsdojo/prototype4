//play the English audio on load

$intro = $('#instruct');
$english = $('#iAmSteve');

$intro.on('load', $intro.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1200));


//highlight the words as they are spoken


$i = $("#i, #am, #steve1");
$jeg = $("#jeg, #er, #Steve");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1500));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2200));

$jeg.on('load', setTimeout(function() {
    $jeg.addClass("blue");
}, 2500));

$jeg.on('load', setTimeout(function() {
    $jeg.removeClass("blue");
}, 3400));


//play the Danish audio 1.7 seconds after load


$danish = $('#audio');

$danish.on('load', setTimeout(function() {
    $danish.trigger("play");
}, 2400));


//play Danish audio when the words are clicked


$('#jeg').on('click', function() {
    $('#audioJeg').trigger("play");
});

$('#er').on('click', function() {
    $('#audioEr').trigger("play");
});

$('#Steve').on('click', function() {
    $('#audioSteve').trigger("play");
});


//play Danish audio when users click the replay button


$('#play').on('click', function() {
    $danish.trigger("play");
});
