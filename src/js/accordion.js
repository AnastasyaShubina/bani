export const accordionHeaders = document.querySelectorAll('.questions--container__accordion--main');
accordionHeaders.forEach(header => {
        header.addEventListener('click', event => {
            // const accordionItem = event.target.parentElement;
            // const accordionHeader = accordionItem.querySelector('.accordion-header');
            // const accordionContent = accordionItem.querySelector('.accordion-content');
            // accordionHeader.classList.toggle('active');
            header.classList.toggle('active');

            // header.style.fontWeight = accordionContent.classList.contains('active') ? '600' : '400';
            // header.style.color = accordionContent.classList.contains('active') ? '#F03F29' : 'black';
        });
    });
    

