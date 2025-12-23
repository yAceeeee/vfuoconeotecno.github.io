function syncLoader() {
    const speed = 0.006;
    const waveOffset = 1.5;
    const height = 18;
    
    const now = Date.now() * speed;
    const spans = document.querySelectorAll('.loader span');
    
    spans.forEach((span, index) => {
        let y = Math.sin(now - (index * waveOffset)) * height;
        if (y > 0) y = 0; 
        span.style.transform = `translateY(${y}px)`;
    });
    
    requestAnimationFrame(syncLoader);
}

syncLoader();

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('page-loaded');
    }, 500);
});

document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
}, false);

document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
}, false);