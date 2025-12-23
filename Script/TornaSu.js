document.addEventListener('DOMContentLoaded', function() {
    
    const scrollButton = document.getElementById('scroll-to-top'); 
    
    if (scrollButton) {
        scrollButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    function handleScrollEvents() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 0) {
            if (scrollButton) {
                scrollButton.classList.add('show');
            }
        } else {
            if (scrollButton) {
                scrollButton.classList.remove('show');
            }
        }
    }
    window.addEventListener('scroll', handleScrollEvents);
    handleScrollEvents(); 
});