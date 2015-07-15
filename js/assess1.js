//play the English audio on load


$instruct = $('#instruct');
$question = $('#question');

$instruct.on('load', $instruct.trigger("play"));
$question.on('load', setTimeout(function() {
    $question.trigger('play');
}, 3000));


//replace the 'Show Answer' button with the answer div when the button is pressed


$show = $('#showAnswer');
$danish = $('#bothAnswers');

$show.on('click', function() {
 $('#answer').removeClass('hide');
 $show.addClass('hide');
 $danish.trigger("play");
});


//play Danish audio when the words are clicked


$('#ja').on('click', function() {
    $('#audioJa').trigger("play");
});

$('.jeg').on('click', function() {
    $('#audioJeg').trigger("play");
});

$('.er').on('click', function() {
    $('#audioEr').trigger("play");
});

$('.Steve').on('click', function() {
    $('#audioSteve').trigger("play");
});

$('#nej').on('click', function() {
    $('#audioNej').trigger("play");
});

$('#ikke').on('click', function() {
    $('#audioIkke').trigger("play");
});

//play Danish audio when users click the play button


$replay = $('#replay');

$replay.on('click', function() {
 $question.trigger("play");
});


//hide the answer and show the 'Show Answer' button when the 'Replay' button is pressed


$replay.on('click', function() {
  $('#answer').addClass('hide');
  $show.removeClass('hide');
});


//adjust the progress bar


$('#bar').css('width', '216px');