let black = document.querySelector('.navblack');
let red = document.querySelector('.navred');
let white = document.querySelector('.navwhite');

let btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
        //  black.style.width = "45vh";
        //  black.style.transitionDelay = "0.5s";
        // black.style.tram
    black.classList.toggle("navblackactive");
    red.classList.toggle("navredactive");        
    white.classList.toggle("navwhiteactive");        

});
