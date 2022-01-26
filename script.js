window.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.startBtn'),
          display = document.querySelectorAll('.display'),
          title = document.querySelector('.titleMove'),
          sceneTwo = document.querySelector('.sceneTwo'),
          closeBtn = document.querySelector('.closeBtn'),
          rover = document.querySelector('#rover'),
          krator = document.querySelector('#krator'),
          kanion = document.querySelector('#kanion'),
          pluse = document.querySelector('.pluse'),
          pluseOne = document.querySelector('#pluseOne'),
          pluseTwo = document.querySelector('#pluseTwo'),
          pluseThree = document.querySelector('#pluseThree'),        
          main = document.querySelector('main');
         
          rover.style.display="none";
          krator.style.display="none";
          kanion.style.display="none";
          main.style.transition = 'filter 0.5s ease-in-out';     

          closeBtn.addEventListener('click', ()=>{             
            title.style.height =  `100px`;
            sceneTwo.style.display = "none";
            pluse.style.display= "none";
            rover.style.display = "none";
            krator.style.display ="none";
            kanion.style.display ="none";
            main.style.filter ='brightness(100%)';  

            display.forEach(item => {
                item.classList.toggle('hide');                 
                setTimeout(() => item.classList.toggle('nomarg'), 100);  
                setTimeout(() => item.style.display = "block", 1100);        
            });  
          });


        btn.addEventListener('click', ()=>{ 
            let i =  100;
            setInterval(() => title.style.height =  `${i--}px `, 11);                 
            setTimeout(() => sceneTwo.classList.toggle('b-show'), 900);  
            setTimeout(() => sceneTwo.style.display = "block", 1100);
            setTimeout(() => pluse.style.display="block", 2700);

            display.forEach(item => {
                item.classList.toggle('hide');                 
                setTimeout(() => item.classList.toggle('nomarg'), 100);  
                setTimeout(() => item.style.display = "none", 1100);                       
            });            
          
        });

        pluseTwo.addEventListener('click', () =>{
            rover.classList.remove('fadeOut');
            rover.style.display = "block";
            pluse.style.display = "none"; 
            kanion.style.display = "none";
            main.style.filter ='brightness(5%)';                              
            });  

        rover.addEventListener('click', () =>{
            rover.classList.add('fadeOut');
            setTimeout(() => rover.style.display = "none", 500);
            pluse.style.display = "block"; 
            main.style.filter ='brightness(100%)';                                   
            });                
        
        pluseThree.addEventListener('click', () =>{
            krator.classList.remove('fadeOut');
            krator.style.display = "block";
            pluse.style.display = "none";
            main.style.filter ='brightness(5%)';                           
            });  
        
        krator.addEventListener('click', () =>{
            krator.classList.add('fadeOut');
            setTimeout(() =>  krator.style.display = "none", 500);
            pluse.style.display = "block";    
            main.style.filter ='brightness(100%)';                                
            });  
           
         pluseOne.addEventListener('click', () =>{
            kanion.classList.remove('fadeOut');
            kanion.style.display = "block";
            pluse.style.display = "none";   
            main.style.filter ='brightness(5%)';                                
            });  
            
        kanion.addEventListener('click', () =>{
            kanion.classList.add('fadeOut');
            setTimeout(() =>  kanion.style.display = "none", 500);
            pluse.style.display = "block";
            main.style.filter ='brightness(100%)';                         
            }); 
});

