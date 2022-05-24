document.addEventListener('DOMContentLoaded', () => {
    const headLine = document.querySelector("#headLine");
    const about = document.querySelectorAll ("#about");
    const left = document.querySelectorAll(".left");
    const right = document.querySelectorAll(".right");


    function header(){
        window.addEventListener('scroll', () => {
            val = (scrollY - headLine.offsetTop) + (headLine.offsetTop*0.7);
            headLine.style = `border-bottom: 10px solid transparent; 
                            border-image:linear-gradient(to right top,#6667ab 0%, transparent ${val/3}%, transparent 90%, #6667ab 100%);
                            border-image-slice: 1;`;
        });
    }

    function grad(arr, count, order){
        arr.forEach(elem => {
            window.addEventListener('scroll', () => {
                val = (scrollY - elem.offsetTop + elem.offsetTop*count);
                elem.style = `border-top : 10px solid transparent; 
                            border-image:linear-gradient(${order},#6667ab ${val/8}%, transparent ${val/4}%, transparent 100%, #6667ab 0%);
                            border-image-slice: 1;`;
            });
        });
    }

    function outNum(num, el){     
        const time = 1000;
        const step = 1;
        const l = document.querySelector('#'+ el);
        const triger = document.querySelector("#triger");
        const pos = triger.offsetTop;
        let n = 0;
        let t = Math.round(time/(num/step));
        let go = true;
        window.addEventListener('scroll', () => {   
            console.log(pos, scrollY);
            if ( go == true && pos <= scrollY + scrollY*0.1 ){
            let interval = setInterval(()=>{
                        n = n + step;
                        if (n >= num){
                            clearInterval(interval);
                        } l.innerHTML = n; }, t);     
            go = false;    
            }
        });
    }


    header();
    grad(about, -4.5, 'to left top');
    grad(left, 0.2, 'to left bottom' );
    grad(right, 0.3, 'to right bottom');

    outNum(35, 'out-1'); 
    outNum(353, 'out-2');
    outNum(784, 'out-3');


});


