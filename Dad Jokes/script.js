    document.getElementById('btn').addEventListener('click', joke);
    async function joke(){

        let config = {
            headers:{
                Accept: 'application/json'
            }
        }

        let a = await fetch('https://icanhazdadjoke.com', config);
        let b = await a.json();
        
        document.getElementById('demo').innerHTML = b.joke;
        

    }
