//play the English audio on load


$instruct = $('#instruct');

$instruct.on('load', $instruct.trigger("play"));



//replace the 'Show Answer' button with the answer div when the button is pressed


$show = $('#showAnswer');
$danish = $('#question');

$show.on('click', function() {
 $('#answer').removeClass('hide');
 $show.addClass('hide');
 $danish.trigger("play");
});


//play Danish audio when the words are clicked


$('#er').on('click', function() {
    $('#audioEr').trigger("play");
});

$('.Steve').on('click', function() {
    $('#audioSteve').trigger("play");
});

$('.du').on('click', function() {
    $('#audioDu').trigger("play");
});


//play Danish audio when users click the play button


$replay = $('#replay');

$replay.on('click', function() {
 $instruct.trigger("play");
});


//hide the answer and show the 'Show Answer' button when the 'Replay' button is pressed


$replay.on('click', function() {
  $('#answer').addClass('hide');
  $show.removeClass('hide');
});


//adjust the progress bar


$('#bar').css('width', '207px');