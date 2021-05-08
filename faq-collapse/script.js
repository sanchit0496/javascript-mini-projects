let aw = document.getElementById('logo');
let info = document.getElementById('two');
let aw1 = document.getElementById('logo1');
let info1 = document.getElementById('two1');
let count = 0;

function change(){

    count++;
    if(count % 2 == 1){
        aw.innerHTML = '<i class="far fa-times-circle"></i>';
        info.style.display  = 'block';
        info.style.height  = '5vh';
    }
    else{
        aw.innerHTML = '<i class="fas fa-chevron-down"></i>'
        info.style.display  = 'none';
        info.style.height  = '5vh';
    }

}



function change1(){

    count++;
    if(count % 2 == 1){
        aw1.innerHTML = '<i class="far fa-times-circle"></i>';
        info1.style.display  = 'block';
        info1.style.height  = '5vh';
    }
    else{
        aw1.innerHTML = '<i class="fas fa-chevron-down"></i>'
        info1.style.display  = 'none';
        info1.style.height  = '5vh';
    }

}
