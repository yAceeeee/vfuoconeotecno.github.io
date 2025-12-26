document.addEventListener('DOMContentLoaded', () => {
    
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderDotsContainer = document.querySelector('.slider-dots');

    if (!sliderContainer || slides.length === 0) return;

    let currentSlide = 0;
    const slideIntervalTime = 10000;
    let slideTimer;
    const totalSlides = slides.length;

    const updateSlider = (index) => {
        sliderContainer.style.transform = `translateX(${-index * 100}%)`;
        
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
        
        updateDots(index);
        currentSlide = index;
    };

    const changeSlide = (direction) => {
        let newIndex = currentSlide + direction;
        
        if (newIndex < 0) {
            newIndex = totalSlides - 1;
        } else if (newIndex >= totalSlides) {
            newIndex = 0;
        }
        
        updateSlider(newIndex);
        resetTimer();
    };

    const startTimer = () => {
        slideTimer = setInterval(() => {
            changeSlide(1);
        }, slideIntervalTime);
    };

    const resetTimer = () => {
        clearInterval(slideTimer);
        startTimer();
    };

    const updateDots = (activeIndex) => {
        sliderDotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === activeIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                updateSlider(i);
                resetTimer();
            });
            sliderDotsContainer.appendChild(dot);
        });
    };

    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));

    updateSlider(currentSlide);
    startTimer();

    const scrollerContainer = document.querySelector('.scroller-container');
    const scrollerPrevBtn = document.querySelector('.scroller-prev-btn');
    const scrollerNextBtn = document.querySelector('.scroller-next-btn');
    
    if (!scrollerContainer || !scrollerPrevBtn || !scrollerNextBtn) return;

    const cardWidth = 350;
    const scrollIntervalTime = 5000;
    let scrollPosition = 0;
    let scrollerTimer;
    
    const maxScroll = scrollerContainer.scrollWidth - scrollerContainer.clientWidth;

    const updateScroller = (direction) => {
        let newPosition = scrollPosition + (direction * cardWidth);
        
        if (newPosition < 0) {
            newPosition = maxScroll; 
        } else if (newPosition > maxScroll) {
            newPosition = 0; 
        }
        
        scrollPosition = newPosition;
        
        scrollerContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    };

    const startScrollerTimer = () => {
        scrollerTimer = setInterval(() => {
            updateScroller(1);
        }, scrollIntervalTime);
    };

    const resetScrollerTimer = () => {
        clearInterval(scrollerTimer);
        startScrollerTimer();
    };

    scrollerNextBtn.addEventListener('click', () => {
        updateScroller(1);
        resetScrollerTimer();
    });

    scrollerPrevBtn.addEventListener('click', () => {
        updateScroller(-1);
        resetScrollerTimer();
    });

    startScrollerTimer();
});