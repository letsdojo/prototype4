//play the English audio on load


$instruct = $('#instruct');
$english = $('#audioIAm');

$instruct.on('load', $instruct.trigger("play"));

$english.on('load', setTimeout(function() {
    $english.trigger("play");
}, 1300));


//highlight the words as they are spoken


$i = $("#i");
$jeg = $("#jeg, #er");

$i.on('load', setTimeout(function() {
    $i.addClass("blue");
}, 1400));

$i.on('load', setTimeout(function() {
    $i.removeClass("blue");
}, 2100));

$jeg.on('load', setTimeout(function() {
    $jeg.addClass("blue");
}, 1400));

$jeg.on('load', setTimeout(function() {
    $jeg.removeClass("blue");
}, 2100));

//play the Danish audio 1.3 seconds after load


$jeg = $('#audioJeg');

$jeg.on('load', setTimeout(function() {
    $jeg.trigger("play");
}, 1300));

$er = $('#audioEr');

$er.on('load', setTimeout(function() {
    $er.trigger("play");
}, 2000));


//play Danish audio when the words are clicked


$('#jeg').on('click', function() {
    $('#audioJeg').trigger("play");
});

$('#er').on('click', function() {
    $('#audioEr').trigger("play");
});


//play Danish audio when users click the replay button


$('#play').on('click', function() {
    $jeg.trigger("play");
    setTimeout(function() {
        $er.trigger("play");
    }, 700);
});
