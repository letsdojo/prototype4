//play the English audio on load

$intro = $('#instruct');
$english = $('#audioYou');

$intro.on('load', $intro.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1400));


//highlight the words as they are spoken


$i = $("#you");
$du = $("#du");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1400));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2100));

$du.on('load', setTimeout(function() {
    $du.addClass("blue");
}, 2600));

$du.on('load', setTimeout(function() {
    $du.removeClass("blue");
}, 3200));

//play the Danish audio 1.7 seconds after load


$danish = $('#audioDu');

$danish.on('load', setTimeout(function() {
    $danish.trigger("play");
}, 2600));


//play Danish audio when the words are clicked


$du.on('click', function() {
    $('#audioDu').trigger("play");
});


//play Danish audio when users click the play button


$('#play').on('click', function() {
    $danish.trigger("play");
});


//adjust the progress bar


$('#bar').css('width', '108px');