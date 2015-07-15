//play the English audio on load

$intro = $('#instruct');
$english = $('#audioAm');

$intro.on('load', $intro.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1700));


//highlight the words as they are spoken

$am = $("#am");
$er = $("#er");

$am.on('load', setTimeout(function() {
    $am.addClass("blue");
}, 1700));

$am.on('load', setTimeout(function() {
    $am.removeClass("blue");
}, 2400));

$er.on('load', setTimeout(function() {
    $er.addClass("blue");
}, 2700));

$er.on('load', setTimeout(function() {
    $er.removeClass("blue");
}, 3400));

//play the Danish audio 1.7 seconds after load


$danish = $('#audioEr');

$danish.on('load', setTimeout(function() {
    $danish.trigger("play");
}, 2700));


//play Danish audio when the words are clicked


$er.on('click', function() {
    $('#audioEr').trigger("play");
});


//play Danish audio when users click the play button


$('#play').on('click', function() {
    $danish.trigger("play");
});


//adjust the progress bar


$('#bar').css('width', '27px');