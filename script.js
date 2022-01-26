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
          pluseThree = document.querySelector('#pluseThree');
         
          rover.style.display="none";
          krator.style.display="none";
          kanion.style.display="none";


          closeBtn.addEventListener('click', ()=>{             
            title.style.height =  `100px`;
            sceneTwo.style.display = "none";
            pluse.style.display="none";
            rover.style.display = "none";
            krator.style.display = "none";
            kanion.style.display = "none";

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

        pluseOne.addEventListener('click', () =>{
            rover.style.display = "block";
            pluse.style.display = "none";                              
        });  

        rover.addEventListener('click', () =>{
            rover.style.display = "none";
            pluse.style.display = "block";                              
        });                
        
        pluseTwo.addEventListener('click', () =>{
            krator.style.display = "block";
            pluse.style.display = "none";                              
        });  
        
        krator.addEventListener('click', () =>{
            krator.style.display = "none";
            pluse.style.display = "block";                              
        });  
           
        pluseThree.addEventListener('click', () =>{
            kanion.style.display = "block";
            pluse.style.display = "none";                              
        });  
            
        kanion.addEventListener('click', () =>{
            kanion.style.display = "none";
            pluse.style.display = "block";                              
        }); 
});

