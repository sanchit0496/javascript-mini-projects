let body= document.body;
let slides = document.querySelectorAll('.slide');
let leftBtn= document.getElementById('left');
let rightBtn= document.getElementById('right');

let activeSlide = 0;

setBg();

function setBg(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

rightBtn.addEventListener('click', () => {
    activeSlide++;
    if(activeSlide > slides.length -1){
        activeSlide = 0;
    }
    setBg();
    setActiveSlide();
})


leftBtn.addEventListener('click', () => {
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = slides.length -1;
    }
    setBg();
    setActiveSlide();
})

function setActiveSlide(){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slides[activeSlide].classList.add('active');
}
