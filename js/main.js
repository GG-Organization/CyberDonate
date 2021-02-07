$(document).ready(function() {



    function parallax(layer, container, x, y) {
        var $layer_1 = layer,
            $container = container,
            container_w = $container.width(),
            container_h = $container.height();

        $(window).on('mousemove.parallax', function(event) {
            var pos_x = event.clientX,
                pos_y = event.clientY,
                left = 0,
                top = 0;

            left = container_w / 2 - pos_x;
            top = container_h / 2 - pos_y;

            TweenMax.to(
                $layer_1,
                1, {
                    css: {
                        transform: 'translateX(' + left / x + 'px) translateY(' + top / y + 'px)'
                    },
                    ease: Expo.easeOut,
                    overwrite: 'all'
                });
        });

    }

    $(function() {
        parallax($('.bg_line'), $('.main'), -50, -50);
        // parallax($('.m_tab1'), $('.main'), -120, -120);
        parallax($('.m_tab2'), $('.main'), -100, -100);
        parallax($('.m_tab3'), $('.main'), -70, -70);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').addClass('active');
        } else {
            $('.scrollup').removeClass('active');
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('.they_trust_us_slider1').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        margin: 100,
        autoplayTimeout: 5000,
        center: true,
        autoplayHoverPause: false,
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            400: {
                items: 2,
                margin: 20,
            },
            700: {
                items: 3,
                margin: 20,
            },
            1500: {
                items: 4,
                margin: 100,
            },
            1900: {
                items: 5,
                margin: 100,
            },
        }
    });

    $('.they_trust_us_slider2').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        margin: 100,
        autoplayTimeout: 5000,
        center: true,
        autoplayHoverPause: false,
        mouseDrag: false,
        touchDrag: false,
        rtl: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            400: {
                items: 2,
                margin: 20,
            },
            700: {
                items: 3,
                margin: 20,
            },
            1500: {
                items: 4,
                margin: 100,
            },
            1900: {
                items: 5,
                margin: 100,
            },
        }
    });
});