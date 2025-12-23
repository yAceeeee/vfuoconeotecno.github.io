document.addEventListener('DOMContentLoaded', () => {
    const blocchiTitoli = document.querySelectorAll('.blocco-titoli');

    function closeBlock(block) {
        const header = block.querySelector('.titolo-header');
        const content = block.querySelector('.titolo-contenuto');
        
        if (!content.classList.contains('nascosto')) {
            content.classList.add('nascosto');
            header.style.display = 'flex';
        }
    }

    function closeAllExcept(activeBlock) {
        blocchiTitoli.forEach(block => {
            if (block !== activeBlock) {
                closeBlock(block);
            }
        });
    }

    blocchiTitoli.forEach(block => {
        const header = block.querySelector('.titolo-header');
        const content = block.querySelector('.titolo-contenuto');

        header.addEventListener('click', () => {

            const isOpened = !content.classList.contains('nascosto');
            
            closeAllExcept(block);

            if (isOpened) {
                closeBlock(block);
            } else {
                content.classList.remove('nascosto');
                header.style.display = 'none'; 
            }
        });

        content.addEventListener('click', () => {
            closeBlock(block);
        });
    });
});