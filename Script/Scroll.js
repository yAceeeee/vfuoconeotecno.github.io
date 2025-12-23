document.addEventListener('DOMContentLoaded', function() {
    const mainHeader = document.querySelector('.main-header');
    const activationThreshold = 0; 
    const returnThreshold = 0.1; 
    
    let isHeaderScrolled = false;

    function checkScroll() {
        const currentScrollY = window.scrollY;

        if (!isHeaderScrolled && currentScrollY > activationThreshold) {
            mainHeader.classList.add('scrolled');
            isHeaderScrolled = true;
        
        } else if (isHeaderScrolled && currentScrollY < returnThreshold) {
            mainHeader.classList.remove('scrolled');
            isHeaderScrolled = false;
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});