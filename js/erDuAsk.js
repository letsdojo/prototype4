//play the English audio on load


$instruct = $('#instruct');
$english = $('#areYou');

$instruct.on('load', $instruct.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1400));


//highlight the words as they are spoken


$i = $("#are, #you, #q");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1500));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2500));


//when the 'Show Answer' button is pressed, replace it with with the answer div and play Danish audio


$show = $('#showAnswer');
$erDu = $('#audioErDu');

$show.on('click', function() {
    $('#answer').removeClass('hide');
    $show.addClass('hide');
    $erDu.trigger("play");
});


//play Danish audio when the words are clicked


$('#er').on('click', function() {
    $('#audioEr').trigger("play");
});

$('#du').on('click', function() {
    $('#audioDu').trigger("play");
});


//play Danish audio when users click the replay button

$('#play').on('click', function() {
    $erDu.trigger("play");
});

//hide the answer and show the 'Show Answer' button when the 'Replay' button is pressed


$replay = $('#replay');

$replay.on('click', function() {
    $('#answer').addClass('hide');
    $show.removeClass('hide');
});


//adjust the progress bar


$('#bar').css('width', '153px');