document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        const flipCard = () => {
            const isFlipped = item.classList.toggle('flipped');
            item.setAttribute('aria-pressed', String(isFlipped));
        };

        item.addEventListener('click', flipCard);
        item.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                flipCard();
            }
        });
    });
});