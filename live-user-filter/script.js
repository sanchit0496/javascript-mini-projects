let output = document.getElementById('output');

async function getUser(){
    let a = await fetch('https://randomuser.me/api?results=15');
    let b = await a.json();
    return b;
}



let ou = "";

async function add(){
    let z = await getUser();
    console.log(z);
    for(let i = 0; i < 15; i++){
        ou += `<li>${z.results[i].name.first}</li>`;
    }
    output.innerHTML = ou;
}
getUser();
add();
