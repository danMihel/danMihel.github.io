document.addEventListener('DOMContentLoaded', () => {
    let bord = document.querySelector("#headLine");  

        window.addEventListener('scroll', () => {
            val = scrollY/4.5;
            bord.style = `border-bottom: 10px solid transparent; 
                        border-image:linear-gradient(to right top,#6667ab 0%, transparent ${val}%, transparent 90%, #6667ab 100%);
                        border-image-slice: 1;`;
    });
});