function createSnowfall() {
    if (document.querySelectorAll('.snowflake').length > 0) {
        return; 
    }
    
    const targetElement = document.body;
    const numberOfSnowflakes = 100;
    
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '&#10052;';

        const startX = Math.random() * 100;
        snowflake.style.left = `${startX}vw`;

        const startY = Math.random() * 100; 
        snowflake.style.top = `-${startY}vh`; 

        const duration = (Math.random() * 10) + 5; 
        
        const delay = (Math.random() * duration) * -1; 
        
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;

        const size = (Math.random() * 0.8) + 0.6;
        snowflake.style.fontSize = `${size}em`;
        
        targetElement.appendChild(snowflake);
    }
}

function removeSnowfall() {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(flake => {
        flake.remove(); 
    });
}

function applyTheme(newTheme) {
    const body = document.body;
    
    body.classList.remove('theme-light', 'theme-dark', 'theme-christmas');
    body.classList.add(newTheme);
    
    if (newTheme === 'theme-christmas') {
        createSnowfall(); 
    } else {
        setTimeout(() => {
            removeSnowfall(); 
        }, 350); 
    }
}

document.addEventListener('DOMContentLoaded', function() {

    if (document.body.classList.contains('theme-christmas')) {
        createSnowfall();
    }
});