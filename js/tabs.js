document.addEventListener('DOMContentLoaded', () => {
     let tabBtn = document.querySelectorAll('.step-items__elem'),
         tabContent = document.querySelectorAll('.tab-content');

    tabBtn.forEach(item  => {
        item.addEventListener('click', (event) =>{
           const path = event.currentTarget.dataset.path; 

           tabContent.forEach((event) => {
            event.classList.remove('tab-content-active');
           });

           tabBtn.forEach((event) => {
            event.classList.remove('step__active');
           });

           tabBtn.forEach(() => {
            event.currentTarget.classList.add('step__active');
        });

           document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
        });
    });
});