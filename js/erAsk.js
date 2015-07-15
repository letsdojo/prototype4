//play the English audio on load

$instruct = $('#instruct');
$english = $('#audioAm');

$instruct.on('load', $instruct.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1300));


//highlight the words as they are spoken


$am = $("#am");
$jeg = $("#jeg");

$am.on('load', setTimeout(function() {
    $am.addClass("blue");
}, 1400));

$am.on('load', setTimeout(function() {
    $am.removeClass("blue");
}, 2100));


//replace the 'Show Answer' button with the answer div when the button is pressed


$show = $('#showAnswer');
$danish = $('#audioEr');

$show.on('click', function() {
 $('#answer').removeClass('hide');
 $show.addClass('hide');
 $danish.trigger("play");
});


//play Danish audio when the words are clicked


$('#er').on('click', function() {
 $danish.trigger("play");
});



//play Danish audio when users click the play button


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


$('#bar').css('width', '36px');