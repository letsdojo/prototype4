//reveal speech bubbles after load


$d = $("#bubble2, #prompt, #showAnswer");
$r = $('#rightArrow');


$d.on('load', setTimeout(function() {
    $d.removeClass("blank");
}, 1000));

$show = $('#showAnswer');



//when the 'Show Answer' button is pressed, replace it with with the answer div and play Danish audio


$danish = $('#audio');
$a = $('#danishSentence, #replay');

$show.on('click', function() {
    $('#answer').removeClass('hide');
    $show.addClass('hide');
    $danish.trigger("play");
    $a.removeClass('blank');
    $('#panel').removeClass("blank");
    $('#englishSentence').addClass('blank');
    $d.addClass('blank');
});


//Change sensei's facial expressions and verbal feedback when clicking the 'rate yourself' buttons


    $f = $('#feedback');
    $g = $('#great');
    $o = $('#okay');
    $b = $('#bad');

function one() {
    $f.removeClass('blank');
    $f.html(function() {
        return '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;' + 'Fantastic!'
    });
}

function two() {
    $a.addClass('blank');
    $f.removeClass('blank');
    $f.html(function() {
        return '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;' + 'Fantastic!'
    });
}

function three() {
    $f.removeClass('blank');
    $f.html(function() {
        return '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;' + 'Good job'
    });
}

function four() {
    $a.addClass('blank');
    $f.removeClass('blank');
    $f.html(function() {
        return '&nbsp;' + '&nbsp;' + '&nbsp;' + '&nbsp;' + 'Good job'
    });
}

function five() {
    $f.removeClass('blank');
    $f.html(function() {
        return 'We&#39;ll practice'
    });
}

function six() {
    $a.addClass('blank');
    $f.removeClass('blank');
    $f.html(function() {
        return 'We&#39;ll practice'
    });
}

$g.on('click', function() {
    $('#sensei').attr('src', '../images/mascotBigSmile2.png');
    if ($a.hasClass('blank')) {
        one()
    }
    else {
        two()
    }
    if ($r.hasClass('blank')) {
        $r.removeClass('blank');
    }
});

$o.on('click', function() {
    $('#sensei').attr('src', '../images/mascotLightSmile.png');
    if ($a.hasClass('blank')) {
        three()
    }
    else {
        four()
    }
    if ($r.hasClass('blank')) {
        $r.removeClass('blank');
    }
});

$b.on('click', function() {
    $('#sensei').attr('src', '../images/mascotChallengeBeard.png');
    if ($a.hasClass('blank')) {
        five()
    }
    else {
        six()
    }
    if ($r.hasClass('blank')) {
        $r.removeClass('blank');
    }
});


//play Danish audio when the words are clicked


$('#jeg').on('click', function() {
    $('#audioJeg').trigger("play");
});

$('#er').on('click', function() {
    $('#audioEr').trigger("play");
});

$('#ikke').on('click', function() {
    $('#audioIkke').trigger("play");
});

$('#Steve').on('click', function() {
    $('#audioSteve').trigger("play");
});

$('#replay').on('click', function() {
    $danish.trigger("play");
});

$('#du').on('click', function() {
    $('#audioDu').trigger("play");
});

$('#ja').on('click', function() {
    $('#audioJa').trigger("play");
});

$('#nej').on('click', function() {
    $('#audioNej').trigger("play");
});


//play Danish audio when users click the replay button


$('#play').on('click', function() {
    $danish.trigger("play");
});

