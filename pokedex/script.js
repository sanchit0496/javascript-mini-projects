let pokemons = document.getElementById('pokemons');

async function pokedex(id){
    let a = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let b = await a.json();
    console.log(b);
    createDog(b);
}


function createDog(b){
    let a = document.createElement('div');
    a.classList.add('poke');
    a.innerHTML = `
    <img src = "${b.sprites.back_default}"> <br>
    <strong>Name:</strong> ${b.name}<br>
    <strong>Type:</strong> ${b.types[0].type.name}<br>
    <strong>Experience:</strong> ${b.base_experience}
    `;

    if(b.types[0].type.name == 'water'){
        a.style.backgroundColor = "#DEF3FD";
    }
    if(b.types[0].type.name == 'electric'){
        a.style.backgroundColor = "#FCF7DE";
    }
    if(b.types[0].type.name == 'ground'){
        a.style.backgroundColor = "#f4e7da";
    }
    if(b.types[0].type.name == 'rock'){
        a.style.backgroundColor = "#d5d5d4";
    }
    if(b.types[0].type.name == 'fairy'){
        a.style.backgroundColor = "#fceaff";
    }
    if(b.types[0].type.name == 'poison'){
        a.style.backgroundColor = "#98d7a5";
    }
    if(b.types[0].type.name == 'bug'){
        a.style.backgroundColor = "#f8d5a3";
    }
    if(b.types[0].type.name == 'dragon'){
        a.style.backgroundColor = "#97b3e6";
    }
    if(b.types[0].type.name == 'psychic'){
        a.style.backgroundColor = "#eaeda1";
    }
    if(b.types[0].type.name == 'flying'){
        a.style.backgroundColor = "#F5F5F5";
    }
    if(b.types[0].type.name == 'fighting'){
        a.style.backgroundColor = "#E6E0D4";
    }
    if(b.types[0].type.name == 'normal'){
        a.style.backgroundColor = "#F5F5F5";
    }
    pokemons.appendChild(a);
}


for(let i = 1; i < 150; i++){
    pokedex(i);
}
