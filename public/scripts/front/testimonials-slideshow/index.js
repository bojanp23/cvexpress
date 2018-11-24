$(document).ready(function(){
    $('.sectionSlider').slick({
        autoplay: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});
