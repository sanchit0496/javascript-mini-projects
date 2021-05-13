let canvas = document.getElementById('canvas');
let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');
let sizeEl = document.getElementById('size');
let colorEl = document.getElementById('color');
let clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

//variables
let color = colorEl.value;
let size = 20;
let x;
let y;
let isPressed = false;

//when mouse is pressed
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

//when you stop pressing the mouse
canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

//when you press and grab the mouse
canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        let x2 = e.offsetX;
        let y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})

//drawCircle and drawLine are enough to draw
//1
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill()
}
//2
function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}   

//change color
colorEl.addEventListener('change', (e) => {
    color = e.target.value;
})
//display size change on screen
function changeOnScreen(){
    sizeEl.innerText = size
}

//to increase the size of brush
increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    changeOnScreen()
})

//to decrease the size of brush
decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    changeOnScreen()
})

//clear the canvas bro
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))
