//play the English audio on load


$english = $('#audioIAm');

$english.on('load', $english.trigger("play"));


//play the Danish audio 1.3 seconds after load


$duEr = $('#audioErDu');

$duEr.on('load', setTimeout(function() {
    $duEr.trigger("play");
}, 1300));


//play Danish audio when the words are clicked


$('#er').on('click', function() {
    $('#audioEr').trigger("play");
});

$('#du').on('click', function() {
    $('#audioDu').trigger("play");
});


//play Danish audio when users click the replay button


$('#play').on('click', function() {
    $duEr.trigger("play");
});
