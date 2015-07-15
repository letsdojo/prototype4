//play the English audio on load


$instruct = $('#instruct');
$english = $('#amNot');

$instruct.on('load', $instruct.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 4300));


//highlight the words as they are spoken


$i = $("#am");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 4300));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 4300));


//when the 'Show Answer' button is pressed, replace it with with the answer div and play Danish audio


$show = $('#showAnswer');
$danish = $('#erIkke');

$show.on('click', function() {
    $('#answer').removeClass('hide');
    $show.addClass('hide');
    $danish.trigger("play");
});


//play Danish audio when the words are clicked


$('#er').on('click', function() {
    $('#audioEr').trigger("play");
});

$('#ikke').on('click', function() {
    $('#audioIkke').trigger("play");
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


$('#bar').css('width', '81px');