let sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

let count = 0;

sounds.forEach(sound => {
    let btn = document.createElement('button');
    btn.classList.add('sound');
    btn.innerHTML = sound;
    
    btn.addEventListener('click', () => {
        count++;
        if(count % 2 == 1){
        document.getElementById(sound).play();
        }else{
            pauseSong();
        }

    });
    
    document.getElementById('buttons').appendChild(btn);
    
});


function pauseSong(){
    sounds.forEach(sound => {
        let a = document.getElementById(sound);
       a.pause(); 
    });
}
