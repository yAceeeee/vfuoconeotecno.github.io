document.addEventListener('DOMContentLoaded', () => {
    const lightButton = document.getElementById('theme-light');
    const darkButton = document.getElementById('theme-dark');
    const christmasButton = document.getElementById('theme-christmas');
    const themeClasses = ['theme-light', 'theme-dark', 'theme-christmas'];

    const getAudioPath = () => {
        const baseUrl = window.location.origin + window.location.pathname.split('/').slice(0, -1).join('/');
        const path = window.location.pathname;
        const s = path.split('/').filter(Boolean);

        if (path.includes('/Personale/') && s.length >= 4) return '../../../Audio/Natale.mp3';
        if (path.includes('/Medaglie/') || path.includes('/Personale/')) return '../../Audio/Natale.mp3';
        if (s.length >= 1 && !path.endsWith('index.html') && path.includes('/')) return '../Audio/Natale.mp3';
        
        return 'Audio/Natale.mp3';
    };

    const audio = new Audio(getAudioPath());
    audio.loop = true;
    audio.volume = 0.05;

    const savedTime = localStorage.getItem('christmasAudioTime');
    if (savedTime) audio.currentTime = parseFloat(savedTime);
    audio.muted = localStorage.getItem('christmasAudioMuted') === 'true';

    setInterval(() => {
        if (!audio.paused) localStorage.setItem('christmasAudioTime', audio.currentTime);
    }, 1000);

    const syncAudio = (theme) => {
        if (theme === 'theme-christmas') {
            audio.play().catch(() => {
                console.log("Online: Attesa interazione utente per audio...");
                const unlock = () => {
                    audio.play();
                    document.removeEventListener('click', unlock);
                };
                document.addEventListener('click', unlock);
            });
            if (muteBtn) muteBtn.style.display = 'flex';
        } else {
            audio.pause();
            if (muteBtn) muteBtn.style.display = 'none';
        }
    };

    const applyTheme = (name) => {
        document.body.classList.remove(...themeClasses);
        if (name && name !== 'theme-default') document.body.classList.add(name);
        localStorage.setItem('themePreference', name);
        syncAudio(name);
    };

    const muteBtn = document.createElement('div');
    Object.assign(muteBtn.style, {
        position: 'fixed', bottom: '10px', right: '20px', width: '40px', height: '40px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%', display: 'none',
        justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: '9999',
        border: '1px solid white', color: 'white', fontSize: '20px'
    });
    muteBtn.innerHTML = '♪';
    document.body.appendChild(muteBtn);

    muteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.muted = !audio.muted;
        localStorage.setItem('christmasAudioMuted', audio.muted);
        muteBtn.style.opacity = audio.muted ? '0.5' : '1';
    });

    if (lightButton) lightButton.addEventListener('click', () => applyTheme('theme-light'));
    if (darkButton) darkButton.addEventListener('click', () => applyTheme('theme-dark'));
    if (christmasButton) christmasButton.addEventListener('click', () => applyTheme('theme-christmas'));

    const currentTheme = localStorage.getItem('themePreference') || 'theme-light';
    applyTheme(currentTheme);
});