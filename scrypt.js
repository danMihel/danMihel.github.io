document.addEventListener('DOMContentLoaded', () => {

    let acc = document.querySelectorAll(".accordion"),
        i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("underline");
            this.classList.toggle("markGreen");  
            let panel = this.nextElementSibling;
            
            if (panel.style.visibility === "visible") {
                panel.style.visibility = "hidden";
            } else {
                panel.style.visibility = "visible";
            }
        });
    }
    
});