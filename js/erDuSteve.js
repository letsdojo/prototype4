//play the English audio on load

$intro = $('#instruct');
$english = $('#areYouSteve');

$intro.on('load', $intro.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1700));


//highlight the words as they are spoken

$am = $("#are, #you, #steve1, #q");
$er = $("#er, #du, #Steve, #q2");

$am.on('load', setTimeout(function() {
    $am.addClass("blue");
}, 1700));

$am.on('load', setTimeout(function() {
    $am.removeClass("blue");
}, 2400));

$er.on('load', setTimeout(function() {
    $er.addClass("blue");
}, 3000));

$er.on('load', setTimeout(function() {
    $er.removeClass("blue");
}, 3700));


//play the Danish audio 1.7 seconds after load


$danish = $('#erDuSteve');

$danish.on('load', setTimeout(function() {
    $danish.trigger("play");
}, 3000));


//play Danish audio when the words are clicked


$('#er').on('click', function() {
    $('#audioEr').trigger("play");
});

$('#du').on('click', function() {
    $('#audioDu').trigger("play");
});

$('#Steve').on('click', function() {
    $('#audioSteve').trigger("play");
});


//play Danish audio when users click the replay button


$('#play').on('click', function() {
    $danish.trigger("play");
});


//adjust the progress bar


$('#bar').css('width', '144px');