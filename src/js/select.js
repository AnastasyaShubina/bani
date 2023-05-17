export const openSelect =  document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownSelect = document.getElementById('dropdown-select');
  
    dropdownBtn.addEventListener('click', () => {
      dropdownSelect.classList.toggle('open');
    });
  
    dropdownSelect.addEventListener('blur', () => {
      dropdownSelect.classList.remove('open');
    });
  });