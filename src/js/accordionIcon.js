export const accordionIcons = document.querySelectorAll('.accordion-icon');
    accordionIcons.forEach(icon => {
        icon.addEventListener('click', event => {
            const accordionItem = event.target.parentElement;
            const accordionContent = accordionItem.querySelector('.questions--container__accordion--main__item');
            accordionContent.classList.toggle('active');
            icon.style.transform = accordionContent.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });