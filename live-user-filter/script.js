let output = document.getElementById('output');
let filter = document.getElementById('filter');
let names = [];
filter.addEventListener('input', (e) => filterData(e.target.value));

async function getUser(){
    let a = await fetch('https://randomuser.me/api?results=15');
    let b = await a.json();
    return b;
}

let ou = "";
let res = "";
async function add(){
    let z = await getUser();
    for(let i = 0; i < 15; i++){
        ou += `<li class = "show">${z.results[i].name.first}</li>`;
        names.push(`${z.results[i].name.first}`);
    }
    output.innerHTML = ou;
    let res = document.querySelectorAll('.show');
    console.log(names.length);
}

function filterData(searchTerm){
    ou = "";
    for(let i = 0; i < names.length; i++){
        if(names[i].indexOf(searchTerm) > -1){
            ou += `<li style = "color:white;">${names[i]}</li>`;
        }else{
        }
    }
    output.innerHTML = ou;
}



getUser();
add();
