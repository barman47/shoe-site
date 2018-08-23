$(document).ready(function () {
    // $('.carousel.carousel-slider').carousel({
    //   	fullWidth: true,
    //   	indicators: true,
          
    // });
    // setInterval(function () {
    //     $('.carousel.carousel-slider').carousel('next');
    // }, 4000);
    
    $('.slider').slider();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();

    $('#top').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById('top').style.display = 'block';
        } else {
            document.getElementById('top').style.display = 'none';	
        }
    };
});