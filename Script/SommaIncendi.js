document.addEventListener('DOMContentLoaded', () => {
    
    const celleDati = document.querySelectorAll('.data-value');
    let sommaTotale = 0;

    celleDati.forEach(cella => {
        const valoreStringa = cella.textContent;
        
        const valoreNumerico = Number(valoreStringa);

        if (!isNaN(valoreNumerico)) {
            sommaTotale += valoreNumerico;
        }
    });

    const sommaIntera = Math.trunc(sommaTotale); 
    
    const elementoResoconto = document.querySelector('.incendio');

    if (elementoResoconto) {
        elementoResoconto.textContent += `: ${sommaIntera}`;
    }
    
    console.log("Somma totale (con decimali):", sommaTotale);
    console.log("Somma convertita a intero:", sommaIntera);
    console.log("Tipo di dato della somma:", typeof sommaIntera); 
});