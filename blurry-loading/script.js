let loader = document.querySelector('.loading-text');
let bg = document.querySelector('.bg');


let count = 0;

let a = setInterval(increment, 20);

function increment(){
    count++;
    if(count == 100){
        clearInterval(a);
    }

   loader.innerHTML = count;
   loader.style.opacity =  scale(count, 0, 100, 1, 0);
   bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
