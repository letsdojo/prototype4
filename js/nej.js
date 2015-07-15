//play the English audio on load

$intro = $('#instruct');
$english = $('#audioNo');

$intro.on('load', $intro.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1200));


//highlight the words as they are spoken


$i = $("#no");
$du = $("#nej");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1200));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2000));

$du.on('load', setTimeout(function() {
    $du.addClass("blue");
}, 2900));

$du.on('load', setTimeout(function() {
    $du.removeClass("blue");
}, 3500));

//play the Danish audio 1.7 seconds after load


$danish = $('#audioNej');

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


$('#bar').css('width', '180px');