export const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.dataset.target;
  let count = 0;
  const speed = 40; 

  function updateCounter() {
    const increment = target / speed;
    count += increment;

    if (count < target) {
      counter.innerText = Math.ceil(count);
      setTimeout(updateCounter, 50);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
});