document.addEventListener('DOMContentLoaded', () => {
    const lightButton = document.getElementById('theme-light');
    const darkButton = document.getElementById('theme-dark');
    const christmasButton = document.getElementById('theme-christmas');
    
    const themeClasses = ['theme-light', 'theme-dark', 'theme-christmas'];

    const applyTheme = (themeName) => {
        const body = document.body;
        
        themeClasses.forEach(theme => {
            body.classList.remove(theme);
        });
        
        if (themeName && themeName !== 'theme-default') {
            body.classList.add(themeName);
        }

        localStorage.setItem('themePreference', themeName);
    };

    const loadTheme = () => {
        const savedTheme = localStorage.getItem('themePreference') || 'theme-light';
        applyTheme(savedTheme);
    };

    if (lightButton) {
        lightButton.addEventListener('click', () => applyTheme('theme-light'));
    }

    if (darkButton) {
        darkButton.addEventListener('click', () => applyTheme('theme-dark'));
    }

    if (christmasButton) {
        christmasButton.addEventListener('click', () => applyTheme('theme-christmas'));
    }

    loadTheme();
});