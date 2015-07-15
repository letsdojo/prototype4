//play the English audio on load


$english = $('#audioIAm');

$english.on('load', $english.trigger("play"));


//when the 'Show Answer' button is pressed, replace it with with the answer div and play Danish audio


$show = $('#showAnswer');
$duEr = $('#audioDuEr');

$show.on('click', function() {
    $('#answer').removeClass('hide');
    $show.addClass('hide');
    $duEr.trigger("play");
});


//play Danish audio when the words are clicked


$('#du').on('click', function() {
    $('#audioDu').trigger("play");
});

$('#er').on('click', function() {
    $('#audioEr').trigger("play");
});


//play Danish audio when users click the replay button

$('#play').on('click', function() {
    $duEr.trigger("play");
});

//hide the answer and show the 'Show Answer' button when the 'Replay' button is pressed


$replay = $('#replay');

$replay.on('click', function() {
    $('#answer').addClass('hide');
    $show.removeClass('hide');
})