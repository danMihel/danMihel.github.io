window.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.startBtn'),
          display = document.querySelectorAll('.display'),
          title = document.querySelector('.titleMove');
    
          let i = 100;


        btn.addEventListener('click', ()=>{ 
            setInterval(() =>   title.style.height =  `${i--}px `, 11);       
            display.forEach(item => {
                item.classList.add('hide');  
               
                setTimeout(() => item.classList.add('nomarg'), 100);  
               /*  setTimeout(() => item.style.display = "none", 1700);   */
            
            });
            
        
    });
   
});


