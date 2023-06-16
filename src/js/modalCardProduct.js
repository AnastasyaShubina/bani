export const modalCardProduct = () => {
    const contactUsBtn = document.querySelector('.cardProduct--mainDescription__container--text__priceContainer--buttonContainer__buttonBasket');
    const modalCardProduct = document.querySelector('.modalCardProduct');
    const modalCardProductCloseBtn = document.querySelector('.close');
    const html = document.querySelector('html');

    contactUsBtn.addEventListener('click', () => {
        modalCardProduct.style.display = 'block'
        html.style.overflow = 'hidden'
    });

    modalCardProduct.addEventListener('click', (e) => {
    if (e.target === modalCardProduct || e.target === modalCardProductCloseBtn) {
        modalCardProduct.style.display = 'none'
        html.style.overflow = 'auto'
    }
    });
}