//play the English audio on load

$instruct = $('#instruct');
$english = $('#audioI');

$instruct.on('load', $instruct.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 4100));


//highlight the words as they are spoken


$i = $("#i");
$jeg = $("#jeg");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 4100));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 4800));


//replace the 'Show Answer' button with the answer div when the button is pressed


$show = $('#showAnswer');
$danish = $('#audioJeg');

$show.on('click', function() {
 $('#answer').removeClass('hide');
 $show.addClass('hide');
 $danish.trigger("play");

});


//play Danish audio when the words are clicked


$jeg.on('click', function() {
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


$('#bar').css('width', '18px');