let username = document.getElementById('userName');

username.addEventListener('keyup', search);

function search(username){
    let enteredUser = username.target.value;
    console.log(enteredUser);
    gUser(enteredUser);
}

async function gUser(username){
    let a = await fetch(`https://api.github.com/users/${username}`);
    let b = await a.json();
    console.log(b);
    let ou = "";
    ou = `
    Name: ${b.name} <br>
    Repositories: ${b.public_repos} <br>
    Followers: ${b.followers} <br>
    Following: ${b.following}
    `;
    
    document.getElementById('output').innerHTML = ou;


}
