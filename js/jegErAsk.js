//play the English audio on load


$instruct = $('#instruct');
$english = $('#audioIAm');

$instruct.on('load', $instruct.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1500));


//highlight the words as they are spoken


$i = $("#i");
$am = $("#am");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1600));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2200));

$am.on('load', setTimeout(function() {
    $am.addClass("blue");
}, 2200));

$am.on('load', setTimeout(function() {
    $am.removeClass("blue");
}, 2800));

//when the 'Show Answer' button is pressed, replace it with with the answer div and play Danish audio


$show = $('#showAnswer');
$jegEr = $('#audioJegEr');

$show.on('click', function() {
    $('#answer').removeClass('hide');
    $show.addClass('hide');
    $jegEr.trigger("play");
});


//play Danish audio when the words are clicked


$('#jeg').on('click', function() {
    $('#audioJeg').trigger("play");
});

$('#er').on('click', function() {
    $('#audioEr').trigger("play");
});


//play Danish audio when users click the replay button

$('#play').on('click', function() {
    $jegEr.trigger("play");
});

//hide the answer and show the 'Show Answer' button when the 'Replay' button is pressed


$replay = $('#replay');

$replay.on('click', function() {
    $('#answer').addClass('hide');
    $show.removeClass('hide');
});


//adjust the progress bar


$('#bar').css('width', '45px');