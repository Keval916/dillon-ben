
// Slider Counter
    var $slider = $('.video-wrap');

        if ($slider.length) {
            var currentSlide;
            var slidesCount;
            var sliderCounter = document.createElement('div');
            sliderCounter.classList.add('slider__counter');
            
            var updateSliderCounter = function(slick, currentIndex) {
                currentSlide = slick.slickCurrentSlide() + 1;
                slidesCount = slick.slideCount === null ? 9 : slick.slideCount;
                $(sliderCounter).text(currentSlide + ' of ' +slidesCount)
            };

            $slider.on('init', function(event, slick) {
                $slider.append(sliderCounter);
                updateSliderCounter(slick);
            });

            $slider.on('afterChange', function(event, slick, currentSlide) {
                updateSliderCounter(slick, currentSlide);
            });

            target.unslick();
    }


    // Accordian
    $('.toggle-acc').on('click', function(e) {
      
        var current = $(this);
        var currentParent = current.parents('li');
        var currentContent = currentParent.find('.content')
        var currentArrow = current.find('span');
    
        $('.content').not(currentContent).slideUp(0);
        $('.toggle-acc span').not(currentArrow).removeClass('rotate');
    
        currentArrow.toggleClass('rotate');
        currentContent .slideToggle(250);
       
    });

    // 
    function myFunction() {
        var element = document.getElementById("pop");
        element.classList.toggle("mystyle");
}
