let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', change);

function change(){
    let changer = window.innerHeight * 0.75;

    boxes.forEach(box => {
        let boxtop = box.getBoundingClientRect().top;

        if(boxtop < changer){
            box.classList.add('active');
        }else{
            box.classList.remove('active');
        }

    });


}
change();
