let task = document.getElementById('task');
let alltasks = document.getElementById('alltasks');
let result = document.getElementById('result');


function display(){

    let a = task.value;
    if(a != ''){
        let item = document.createElement('li');
        item.classList.add('item');
        item.innerHTML = a;
        alltasks.append(item);
        let l = document.querySelectorAll('.item');
    }else{
        alert('Enter a value to continue');
    }
}

function displayAnswer(){
    let alltasks1 = document.querySelectorAll('.item');
    let l1 = alltasks1.length;
    result.innerHTML = `<strong>Your randomly selected option is</strong><br> ${alltasks1[Math.floor(Math.random() * (l1-1))].innerHTML}`;
}
