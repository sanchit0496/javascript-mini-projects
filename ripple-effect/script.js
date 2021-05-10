let buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e){

        let x = e.clientX;
        let y = e.clientY;

        let a = e.target.offsetTop;
        let b = e.target.offsetLeft;

        let insideLeft = x-b;
        let insideTop = y-a;
        console.log(insideTop, insideLeft);

        let circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.left = insideLeft + "px";
        circle.style.top = insideTop + "px";
        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);

    })
})
