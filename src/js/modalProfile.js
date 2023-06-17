export const modalProfile = () => {
    const contactUsBtn = document.querySelector('.profile--container__cards--myOrders__total--button');
    const modalProfile = document.querySelector('.modalProfile');
    const modalProfileBack = document.querySelector('.modalProfile--back');
    const modalProfileCloseBtn = document.querySelector('.modalProfile--window__content--buttons .buttonSecondary');    
    const html = document.querySelector('html');

    contactUsBtn.addEventListener('click', () => {
        modalProfile.style.display = 'block'
        html.style.overflow = 'hidden'
    });

    modalProfile.addEventListener('click', (e) => {
        if (e.target === modalProfileCloseBtn || e.target === modalProfileBack) {
            modalProfile.style.display = 'none'
            html.style.overflow = 'auto'
        }
    });
}  