const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => {
    changeSlide('up');
})


downButton.addEventListener('click', () => {
    changeSlide('down');
})

let idx = 0;

const changeSlide = (direction) => {
    const dispHeight = sliderContainer.clientHeight;
    if(direction === 'up'){
        idx++;
        if(idx > slidesLength -1){
            idx = 0;
        }
    }else if(direction === 'down'){
        idx--;
        if(idx < 0){
            idx = slidesLength -1;
        }
    }

    slideLeft.style.transform = `translateY(${idx * dispHeight}px)`;

    slideRight.style.transform = `translateY(-${idx * dispHeight}px)`;

}
