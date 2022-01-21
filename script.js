window.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.startBtn'),
          display = document.querySelectorAll('.display'),
          title = document.querySelector('.titleMove'),
          sceneTwo = document.querySelector('.sceneTwo'),
          closeBtn = document.querySelector('.closeBtn');
         

          closeBtn.addEventListener('click', ()=>{ 
            sceneTwo.style.display = "none";
            display.forEach(item => {
                item.classList.toggle('hide');                 
                setTimeout(() => item.classList.toggle('nomarg'), 100);  
                setTimeout(() => item.style.display = "block", 1100);        
            });  
          });


        btn.addEventListener('click', ()=>{ 
            let i = 100;
            setInterval(() => title.style.height =  `${i--}px `, 11);                 
            setTimeout(() => sceneTwo.classList.add('b-show'), 900);  
            

            display.forEach(item => {
                item.classList.add('hide');                 
                setTimeout(() => item.classList.add('nomarg'), 100);  
                setTimeout(() => item.style.display = "none", 1100);        
            });   
          
    });
   
});

