$('.animated-input').click(function(e) {
  $(this).parent().addClass('input-filled');
  if ($(this).val().length == 0)
    $(this).parent().removeClass('input-filled');
  else
    $(this).parent().addClass('input-filled');
});
$('.animated-input').keyup(function() {
  if ($(this).val().length)
    $(this).parent().addClass('input-filled');
  else
    $(this).parent().removeClass('input-filled');
});



// ===== Scroll to Top ====
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('.scroll-to-top').addClass("in"); // Fade in the arrow
    } else {
        $('.scroll-to-top').removeClass("in"); // Else fade out the arrow
    }
});
$('.scroll-to-top').click(function () { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});

//webp-finder
$(window).on('load', function () {
    $("html.no-webp .webp-img-cont").each(function () {
        var isBackgroundImage = $(this).attr('data-background-image');
        isBackgroundImage = (isBackgroundImage == undefined || isBackgroundImage == 'undefined' ||
            isBackgroundImage == null || isBackgroundImage == 'null') ? '' : isBackgroundImage;
        if (isBackgroundImage != '') {
            $(this).css('background-image', 'url(' + isBackgroundImage + ')');
        }
    });
});
//webp-finder END

$('.dropdown-menu').click(function (e) {
    e.stopPropagation();
});
$(".submenu-arrow").click(function () {
    $(this).parent().toggleClass("show");
    $(".submenu-arrow").not(this).parent().removeClass("show");
});
$(".drp-arrow").click(function () {
    $(this).parent().toggleClass("show-drop");
})

//menu-fix /////
$(window).scroll(function (e) {
    var scroller_anchor = $(".scroller_anchor").offset().top;
    if ($(this).scrollTop() >= scroller_anchor && $('.scroller_anchor').css('position') != 'fixed') {
        $('.navigation-area').addClass('menu-fix').slideDown();
    } else if ($(this).scrollTop() < scroller_anchor && $('.scroller_anchor').css('position') != 'relative') {
        $('.navigation-area').removeClass('menu-fix');
    }
});
//menu-fix end/////



//Hide Footer Form On Contact Page//
$(document).ready(function(){
        var currentLocation = window.location.pathname;
        if(currentLocation == '/contact-us'){
            $('.footer-first').hide();
        }
        else{
            $('.footer-first').show();
        }
        console.log(currentLocation);
    });

//Hide Footer Form On Contact Page Ends//


 // ===== Smooth Scrolling ==== 
    $('a[data-anchor="relativeanchor"]').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 105
        }, 1000);
        return false;
    });

//Case Studies Page 
$('.select-change').click(function() {
        $('#select-project').val($(this).data('val')).trigger('change');
});

//Case Studies Page Ends



if(window.location.pathname === '/case-studies' || window.location.pathname === '/contact-us-demo') {
      $('.footer-first').addClass('d-none');
    }else{
    $('.footer-first').removeClass('d-block');
}


//case study carusel
$('.case-studies-slider').owlCarousel({
        loop: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true
            },
            600: {
                items: 2,
                loop: true,
                autoplay: true
            },
            1200: {
                items: 3
            },

        }
    });

//case study carusel
$('.featured-slides').owlCarousel({
        loop: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 3000,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2,
                loop: true,
                autoplay: true
            },
            600: {
                items: 4,
                loop: true,
                autoplay: true
            },
            1200: {
                items: 5
            },

        }
    });

// Featured Client slider
    $('.featured-clients').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoHeight: true,
        stagePadding: 1,
        autoplayTimeout: 3000,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1200: {
                items: 5
            },

        }
    });


    $('.featured-clients-two').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoHeight: true,
        stagePadding: 1,
        autoplayTimeout: 3000,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 5
            },
            1200: {
                items: 6
            },

        }
    });
// our-fertility-card-slider script
    $('.our-fertility-card-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                dotsEach: 3,
                items: 3
            }
        }
    });

// testimonial slider
    $('.testimonial-slider').owlCarousel({
        loop: false,
        margin: 15,
        autoplay: true,
        autoHeight: true,
        stagePadding: 1,
        autoplayTimeout: 3000,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            },

        }
    });
// website design & development functionality slider
    $('.website-functionality-slider').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoHeight: true,
        stagePadding: 1,
        autoplayTimeout: 2000,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1200: {
                items: 5
            },

        }
    });
//Counter Count for netralayam-achieves-optimum-patient-acquisition-with-healthcaredms
    $(".counter-count").each(countUp);

    function countUp() {
        var num = $(this).text();
        var decimal = 0;
        if (num.indexOf(".") > 0) { // if number is Decimal
            decimal = num.toString().split(".")[1].length;
        }
        $(this)
            .prop("Counter", 0.0)
            .animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: "swing",
                step: function(now) {
                    $(this).text(parseFloat(now).toFixed(decimal));
                }
            });
    }



    $('#inlineCheckbox5').change(function () {
        if ($(this).is(":checked")) {
            $('#other-interest').prop('disabled', false);
            $('#other-interest-toggler').slideDown("fast");
        } else {
            $('#other-interest').prop('disabled', true);
            $('#other-interest-toggler').slideUp("fast");
        }
    });

// Portfolio
 document.addEventListener('DOMContentLoaded', function () {
        var webTemplates = document.querySelectorAll('.web-templets');
        var modalImage = document.querySelector('#medical_websites_design_popup .modal-body img');

        // Attach click event to each web template link
        webTemplates.forEach(function (webTemplate) {
            webTemplate.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default anchor behavior

                // Find the child element with the class 'templet-card' inside the clicked link
                var templateCard = webTemplate.querySelector('.templet-card');

                // Get the background-image URL from the 'templet-card'
                var backgroundImageUrl = getComputedStyle(templateCard).backgroundImage;

                // Extract the URL by removing 'url(' and ')' from the string
                backgroundImageUrl = backgroundImageUrl.slice(4, -1).replace(/"/g, '');

                // Set the src attribute of the modal image
                modalImage.src = backgroundImageUrl;
            });
        });
    });