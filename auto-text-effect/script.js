let msg = "Music Art and Life!"
let speed = document.getElementById('speed');
let output = document.getElementById('output');

let fast = 800/speed.value;
console.log(fast);

speed.addEventListener('input', (e) => {
    fast = 800/e.target.value;
})


let idx = 1;

function show(){
    output.innerHTML = msg.slice(0, idx);
    idx++;
    if(idx > msg.length){
        idx = 0;
    }
    setTimeout(show, fast);
}

show();

