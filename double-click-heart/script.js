let a = document.getElementById('img');
a.addEventListener('dblclick', disp);

let b = document.getElementById('heart');
let c = document.getElementById('counter');
let count = 0;

function disp(){
    count++
    b.style.visibility = 'visible';
    b.style.animation = '2s like-heart-animation ease-in-out forwards';
    c.innerHTML = `Likes: ${count}`;
    setTimeout(() => {
        b.style.visibility = 'hidden';
        b.style.animation = 'none';
    }, 1200);
}
