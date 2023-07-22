$(function(){

    /*
    $(window).on('load', function () {
        $('.page-loader').delay('500').fadeOut(1000);
    });
    */

    $(document).ready(function() {

        $(document).on('click', '#mobile-menu', function() {
            $('.mobile-sidebar-menu').addClass('active');
        });
        $(document).on('click', '.mobile-sidebar-menu #onclick-overlay', function() {
            $('.mobile-sidebar-menu').removeClass('active');
        });

        $(document).on('click', '.menu li .scroll-to', function() {
            $('.mobile-sidebar-menu').removeClass('active');
        })


        $(document).on('click', ".color-boxed a", function() {
            $(".color-boxed a").removeClass("clr-active");
            $(this).addClass("clr-active");
        });
        
        $(document).on('click', ".global-color .setting-toggle", function() {
            $(".global-color").addClass("active");
        });

        $(document).on('click', ".global-color .inner .overlay, .global-color .inner .global-color-option .close-settings", function() {
            $(".global-color").removeClass("active");
        });

    });

    /*
    $(window).scroll(function() {
            
        var windscroll = $(window).scrollTop();
        if (windscroll >= 0) {
            $('.page-section').each(function(i) {
                if ($(this).position().top <= windscroll - -1) {
                    $('.scroll-nav .scroll-to.active').removeClass('active');
                    $('.scroll-nav .scroll-to').eq(i).addClass('active');
                    $('.scroll-nav-responsive a.active').removeClass('active');
                    $('.scroll-nav-responsive a').eq(i).addClass('active');
                }
            });

        } else {

            $('.scroll-nav .scroll-to.active').removeClass('active');
            $('.scroll-nav .scroll-to:first').addClass('active');
            $('.scroll-nav-responsive a.active').removeClass('active');
            $('.scroll-nav-responsive a:first').addClass('active');
        }

        if (windscroll >= 0) {
            $('.scroll-to-page').each(function(i) {

                var wscrolldecress = windscroll + 1;
                // console.log(wscrolldecress);
                if ($(this).position().top <= wscrolldecress - 0) {
                    $('.scroll-nav .scroll-to.active').removeClass('active');
                    $('.scroll-nav .scroll-to').eq(i).addClass('active');
                    $('.scroll-nav-responsive a.active').removeClass('active');
                    $('.scroll-nav-responsive a').eq(i).addClass('active');
                }
            });

        } else {
            $('.scroll-nav .scroll-to.active').removeClass('active');
            $('.scroll-nav .scroll-to:first').addClass('active');
            $('.scroll-nav-responsive a.active').removeClass('active');
            $('.scroll-nav-responsive a:first').addClass('active');
        }

    }).scroll();
    */
});
