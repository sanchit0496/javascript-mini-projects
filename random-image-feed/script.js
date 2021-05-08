async function gUser(){
    let a = await fetch('https://dog.ceo/api/breeds/image/random');
    let b = await a.json();
    console.log(b);
    createDog(b.message);
}


let output = document.getElementById('output');

function createDog(url){
    let a = document.createElement('img');
    a.src = url;
    output.appendChild(a);
}


for(let i = 0; i < 20; i++){
    gUser();
}
