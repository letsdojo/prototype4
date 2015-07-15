/**
 * Created by kwelch on 6/5/15.
 */

//play conversation audio

$('#convoIntro').trigger("play");

function playConvo() {
    $('#convo1').trigger("play");
};

$('#convo1').on('load', setTimeout(playConvo, 3100));


//play & pause button

var convo = document.getElementById('convo1');

$('#pause').on('click', function() {
    if (convo.paused == false) {
        convo.pause();
        $('#playPause').attr('src', '../images/playButton.png');
    } else {
        convo.play();
        $('#playPause').attr('src', '../images/pauseButton.png');
    }
});
