document.addEventListener('DOMContentLoaded', () => {
    const headLine = document.querySelector("#headLine");
    const about = document.querySelector ("#about");
    const left = document.querySelectorAll(".left");
    const right = document.querySelectorAll(".right");

    function header(){
        window.addEventListener('scroll', () => {
            val = (scrollY - headLine.offsetTop) + (headLine.offsetTop*0.7);
            headLine.style= `border-bottom: 10px solid transparent; 
                            border-image:linear-gradient(to right top,#6667ab 0%, transparent ${val/3}%, transparent 90%, #6667ab 100%);
                            border-image-slice: 1;`;
        });
    }

    function aboutUs(elem, count, order){
        window.addEventListener('scroll', () => {
            val = (scrollY - elem.offsetTop + elem.offsetTop*count);
            elem.style =   `border: 10px solid transparent;; 
                            border-image:linear-gradient(${order},#6667ab ${val/5}%, transparent 0%, transparent 100%, #6667ab 0%);
                            border-image-slice: 1;`;
        });
    }

    function Grad(arr, count, order){
        arr.forEach(elem => {
            window.addEventListener('scroll', () => {
                val = (scrollY - elem.offsetTop + elem.offsetTop*count);
                elem.style =   `border: 10px solid transparent;; 
                                border-image:linear-gradient(${order},#6667ab ${val/8}%, transparent ${val/6}%, transparent 100%, #6667ab 0%);
                                border-image-slice: 1;`;
            });
        });
    }

    header();
    aboutUs(about, -3, 'to left top');
    Grad(left, 0.2, 'to left bottom' );
    Grad(right, 0.3, 'to right bottom' );
});


