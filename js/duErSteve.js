//play the English audio on load

$intro = $('#instruct');
$english = $('#youAreSteve');

$intro.on('load', $intro.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1600));


//highlight the words as they are spoken


$i = $("#you");
$jeg = $("#du");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1700));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2400));

$jeg.on('load', setTimeout(function() {
    $jeg.addClass("blue");
}, 2900));

$jeg.on('load', setTimeout(function() {
    $jeg.removeClass("blue");
}, 3400));



//play the Danish audio 1.7 seconds after load


$danish = $('#audio');

$danish.on('load', setTimeout(function() {
    $('#audio').trigger("play");
}, 2900));


//play Danish audio when the words are clicked


$jeg.on('click', function() {
    $('#audioDu').trigger("play");
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


//adjust the progress bar


$('#bar').css('width', '99px');