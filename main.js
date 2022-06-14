/* Scroll reveal */
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    delay: 500,
    origin: 'left',
    duration: 1500,
    distance: '25rem',

});

sr.reveal('.animate-left-2', {
    delay: 300,
    origin: 'left',
    duration: 1500,
    distance: '25rem',

});

sr.reveal('.animate-left-3', {
    delay: 400,
    origin: 'left',
    duration: 1500,
    distance: '25rem',

});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1500,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1500,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1500,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 600,
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1500,
    distance: '25rem',
    delay: 500,
});

sr.reveal('.animate-bottom-2', {
    origin: 'bottom',
    duration: 1500,
    distance: '25rem',
    delay: 400,
});

sr.reveal('.animate-bottom-3', {
    origin: 'bottom',
    duration: 1500,
    distance: '25rem',
    delay: 300,
});

var piesiteFired = 0;
$(document).ready(function() {
    var $win = $(window),
        $win_height = $(window).height(),
        // - A multiple of viewport height - The higher this number the sooner triggered.
        windowPercentage = $(window).height() * 0.9;
    $win.on("scroll", scrollReveal);
    function scrollReveal() {
        var scrolled = $win.scrollTop();
        
        ///////////////////////////////////////
        // Bar Charts scroll activate, looking for .trigger class to fire.
        $(".trigger").each(function() {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (
                scrolled + windowPercentage > offsetTop ||
                $win_height > offsetTop
            ) {
                $(this).each(function(key, bar) {
                    var percentage = $(this).data("percentage");
                    $(this).css("height", percentage + "%"); 
                    
                    ///////////////////////////////////////
                    //        Animated numbers
                    $(this).prop("Counter", 0).animate(
                        {
                            Counter: $(this).data("percentage")
                        },
                        {
                            duration: 2000,
                            easing: "swing",
                            step: function(now) {
                                $(this).text(Math.ceil(now));
                            }
                        }
                    );
                    //        Animated numbers
                    ///////////////////////////////////////
                });

            } else {
                ///////////////////////////////////////
                // To keep them triggered, lose this block.
                $(this).each(function(key, bar) {
                    $(this).css("height", 0);
                });
            }    
            
        });

        ///////////////////////////////////////
        // Horizontal Chart
        $(".chartBarsHorizontal .bar").each(function() {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (
                scrolled + windowPercentage > offsetTop ||
                $win_height > offsetTop
            ) { 
                $(this).each(function(key, bar) {
                    var percentage = $(this).data("percentage");
                    $(this).css("width", percentage + "%");
                    ///////////////////////////////////////
                    //        Animated numbers
                    $(this).prop("Counter", 0).animate(
                        {
                            Counter: $(this).data("percentage")
                        },
                        {
                            duration: 2000,
                            easing: "swing",
                            step: function(now) {
                                $(this).text(Math.ceil(now));
                            }
                        }
                    );
                    //        Animated numbers
                    ///////////////////////////////////////
                });
    
            } else {
                ///////////////////////////////////////
                // To keep them triggered, lose this block.
                $(this).each(function(key, bar) {
                    $(this).css("width", 0);
                });
            }    
            
        });
        
        ///////////////////////////////////////
        // Radial Graphs - scroll activate
        $(".piesite").each(function() {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (
                scrolled + windowPercentage > offsetTop ||
                $win_height > offsetTop
            ) {
                if (piesiteFired == 0) {
                    timerSeconds = 3;
                    timerFinish = new Date().getTime() + timerSeconds * 1000;
                    $(".piesite").each(function(a) {
                        pie = $("#pie_" + a).data("pie");
                        timer = setInterval(
                            "stoppie(" + a + ", " + pie + ")",
                            0
                        );
                    });
                    piesiteFired = 1;
                }
            } else {
                // To keep them triggered, lose this block.
                $(".piesite").each(function() {
                    piesiteFired = 0;
                });
            }
        });
    }
    scrollReveal();
});





