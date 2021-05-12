const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => func(e.target)));

function func(a){
    if(good.checked && cheap.checked && fast.checked){
        if(a == good){
            fast.checked = false;
        }
        if(a  == cheap){
            good.checked = false;
        }
        if(a  == fast){
            cheap.checked = false;
        }
    }
}
