document.addEventListener('DOMContentLoaded', () => {
    let slid = document.querySelector('.slider-container');

    function slider(){      
       setTimeout(() => slid.style.left = ('-100%'), 3000); 
       setTimeout(() => slid.style.left = ('-200%'), 6000); 
       setTimeout(() => slid.style.left = ('-100%'), 9000);  
       setTimeout(() => slid.style.left = ('0%'), 12000);               
    };

    slider();
    setInterval(() => slider(), 15000);  

    
});