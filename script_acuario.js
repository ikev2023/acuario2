let musica;

function onYouTubeIframeAPIReady() {
    musica = new YT.Player('music', {
        height: '0',
        width: '0',
        videoId: '0FO4q0NZoXY',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log('Player ready');
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        musica.playVideo();  // Reiniciar la reproducción cuando termine
    }
}

$(document).ready(function() {
    $('#cmb_poner').on('change', function () {
        if (this.checked) {
            console.log('Playing video');
            musica.playVideo();
        } else {
            console.log('Pausing video');
            musica.pauseVideo();
        }
    });

    function agRandom(argMin, argMax) {
        return (argMin + Math.random() * (argMax + 1 - argMin));
    }

    var fnBubbles = function () {
        var r1 = agRandom(5, 95);
        for (var i = 1; i <= agRandom(20, 50); i++) {
            var r2 = agRandom(5, 18),
                r3 = agRandom(400, 900),
                r4 = agRandom(-900, 0),
                r5 = agRandom(8000, 12000),
                div = document.createElement('div'),
                $newDiv = $(div);

            $newDiv.addClass('js-ag-bubble_item js-ag-bubble_item__dop');
            $newDiv.css({
                left: r1 + '%',
                bottom: 0,
                marginBottom: '-20px',
                x: agRandom(-50, 50),
                width: r2,
                height: (r2 * 0.66)
            });
            $('.js-bubble_list').append($newDiv);
            $newDiv.delay(i * agRandom(30, 150)).transition({
                bottom: '100%',
                marginBottom: '20px',
                opacity: 0.2
            }, r5, 'linear', function () {
                $(this).remove();
            });
        }
        setTimeout(function () {
            fnBubbles();
        }, agRandom(10, 15) * 1000);
    };

    fnBubbles();
});
