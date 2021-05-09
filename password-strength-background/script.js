let pwd = document.getElementById('upwd');
let backg = document.getElementById('bg');

pwd.addEventListener('keydown', (e) => {
    let len = e.target.value.length;
    let blurValue = 20 - len * 2;
    console.log(blurValue);
    backg.style.filter = `blur(${blurValue}px)`;
});
