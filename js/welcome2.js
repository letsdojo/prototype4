//reveal speech bubbles after load


$e = $("#bubble1, #englishSentence");
$d = $("#bubble2, #text2");


$e.on('load', setTimeout(function() {
    $e.removeClass("blank");
}, 400));

$d.on('load', setTimeout(function() {
    $d.removeClass("blank");
}, 1000));

