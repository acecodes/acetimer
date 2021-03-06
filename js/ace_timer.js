var Main = (function() {

    'use strict';
    
    var $ = jQuery.noConflict();

    $(function() {

        function breakTime() {

            $('#breakTimerInfo').toggle(0, function() {
                $.playSound('audio/break');
            });



            $('#startingBlock').toggle(0, function() {});

            $('#breakTimer').countdown({
                until: 300,
                onExpiry: breakTime,
                format: 'MS'
            });

            $('#breakTimerStart').click(function() {
                $('#breakTimer').countdown('option', {
                    until: 300,
                    format: 'MS'
                });
            });


            $('#breakPauseButton').click(function() {
                var pause = $(this).text() === 'Pause';
                $(this).text(pause ? 'Resume' : 'Pause');
                $('#breakTimer').countdown(pause ? 'pause' : 'resume');
            });

        }

        $('#timer').countdown({
            until: 0,
            format: 'MS',
            onExpiry: breakTime
        });

        $('#timerStart').click(function() {
            $('#timer').countdown('option', {
                until: 1500,
                format: 'MS'
            });
        });


        $('#pauseButton').click(function() {
            var pause = $(this).text() === 'Pause';
            $(this).text(pause ? 'Resume' : 'Pause');
            $('#timer').countdown(pause ? 'pause' : 'resume');
        });


        $('.alert').alert();
    });

})();