export const modalProfile = () => {
    const contactUsBtn = document.querySelector('.profile--container__cards--myOrders__total--button');
    const modalProfile = document.querySelector('.modalProfile');
    const modalProfileCloseBtn = document.querySelector('.close');
    const html = document.querySelector('html');

    contactUsBtn.addEventListener('click', () => {
        modalProfile.style.display = 'block'
        html.style.overflow = 'hidden'
    });

    modalProfile.addEventListener('click', (e) => {
    if (e.target === modalProfile || e.target === modalProfileCloseBtn) {
        modalProfile.style.display = 'none'
        html.style.overflow = 'auto'
    }
    });
}