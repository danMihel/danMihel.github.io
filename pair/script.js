document.addEventListener('DOMContentLoaded', () =>{

    let container = document.createElement('div'),
        arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,];

        document.getElementById('root').append(container);
        container.classList.add('container');

        createRow();
        createRow();
        createRow();
        createRow();
        disp(shuffle());
        clicker();

        let btn = document.createElement('button');

        btn.classList.add('btn','btn-danger');
        btn.textContent ='Перемешать карты';
        container.append(btn);

        function createRow(){
            let coll1 = document.createElement('div'),          
                coll2 = document.createElement('div'),          
                coll3 = document.createElement('div'),           
                coll4 = document.createElement('div'),           
                row = document.createElement('div'),
                container = document.createElement('div');

                container.classList.add('row');
                row.classList.add('row');
                coll1.classList.add('coll');
                coll2.classList.add('coll');
                coll3.classList.add('coll');
                coll4.classList.add('coll');

                document.querySelector('.container').append(row);

                row.append(coll1);         
                row.append(coll2);         
                row.append(coll3);          
                row.append(coll4);

                coll1.append(document.createElement('p'));
                coll2.append(document.createElement('p'));
                coll3.append(document.createElement('p'));
                coll4.append(document.createElement('p'));                      
        };
    
        function shuffle(){
            let j, 
                temp;

            for(let i = arr.length - 1; i > 0; i--){
                j = Math.floor(Math.random()*(i + 1));
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }

            return arr;
        }
    
        function disp(arr){
            let nums = arr,
                cards = document.querySelectorAll('p');

            for (let i = 0; i < cards.length; i++){
                cards[i].append(nums[i]);     
                cards[i].classList.add('hiden');
            }
        }

        function clicker (){
            let container = document.querySelector('.container'),
                counter = -1,
                storage = [];

            container.addEventListener('click', (event) =>{
                let target = event.target,              
                    currentCard = target.firstChild;
                            
                if (target.classList != 'coll') return;

                if (storage[`text ${counter-1}`] != storage[`text ${counter-2}`]){
                    storage[counter-1].classList.add('hiden');
                    storage[counter-1].parentNode.classList.remove('trosform'); 
                }

                currentCard.classList.remove('hiden');  
                currentCard.parentNode.classList.add('trosform');  
                storage [counter] = currentCard;
                storage [`text ${counter}`] = currentCard.textContent;
                counter++;

                if(JSON.stringify(storage [`text ${counter-1}`]) == JSON.stringify(storage [`text ${counter-2}`])){
                    storage[counter-1].classList.remove('hiden');
                    storage[counter-2].classList.remove('hiden');
                    storage[counter-2].parentNode.classList.add('trosform');
                }      
            });
        }
        
        function restart(){
        shuffle();
        let cards = document.querySelectorAll('p');
            for (let i = 0; i < cards.length; i++){
                cards[i].textContent = '';     
                cards[i].classList.add('hiden');
                cards[i].parentNode.classList.remove('trosform');
        }
        disp(arr);
        console.log(arr);
        }

        btn.addEventListener('click',function(){
        restart();

        });    
});


