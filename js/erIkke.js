//play the English audio on load

$intro = $('#instruct');
$english = $('#amNot');

$intro.on('load', $intro.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1300));


//highlight the words as they are spoken


$i = $("#am, #not");
$ikke = $("#er, #ikke");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1300));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2000));

$ikke.on('load', setTimeout(function() {
    $ikke.addClass("blue");
}, 2300));

$ikke.on('load', setTimeout(function() {
    $ikke.removeClass("blue");
}, 3000));


//play the Danish audio 1.3 seconds after load


$danish = $('#audioErIkke');

$danish.on('load', setTimeout(function() {
    $danish.trigger("play");
}, 2300));


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
