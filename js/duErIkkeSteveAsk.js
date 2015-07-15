//play the English audio on load


$instruct = $('#instruct');
$english = $('#youAreNotSteve');

$instruct.on('load', $instruct.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1400));


//highlight the words as they are spoken


$i = $("#you, #are, #not, #steve1");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1500));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2500));


//when the 'Show Answer' button is pressed, replace it with with the answer div and play Danish audio


$show = $('#showAnswer');
$danish = $('#duErIkkeSteve');

$show.on('click', function() {
    $('#answer').removeClass('hide');
    $show.addClass('hide');
    $danish.trigger("play");
});


//play Danish audio when the words are clicked


$('#du').on('click', function() {
    $('#audioDu').trigger("play");
});

$('#er').on('click', function() {
    $('#audioEr').trigger("play");
});

$('#ikke').on('click', function() {
    $('#audioIkke').trigger("play");
});

$('#Steve').on('click', function() {
    $('#audioSteve').trigger("play");
});


//play Danish audio when users click the replay button


$('#play').on('click', function() {
    $danish.trigger("play");
});


//hide the answer and show the 'Show Answer' button when the 'Replay' button is pressed


$replay = $('#replay');

$replay.on('click', function() {
    $('#answer').addClass('hide');
    $show.removeClass('hide');
});


//adjust the progress bar


$('#bar').css('width', '135px');