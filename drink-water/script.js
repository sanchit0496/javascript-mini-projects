const smallCups = document.querySelectorAll('.cup-small');
const listers = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

fillBig();


smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => fillCups(idx));
})

function fillCups(idx){

    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--;
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }
    })
    fillBig();


}

function fillBig(){
    let totalFullCups = document.querySelectorAll('.cup-small.full').length;
    let totalCups = smallCups.length;

    if(totalFullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${totalFullCups/ totalCups * 330}px`;
        percentage.innerText = `${totalFullCups/ totalCups * 100}%`;
    }

    if(totalFullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else{
        remained.style.visibility = 'visible';
        listers.innerText = `${2 -(250 * totalFullCups/1000)}L`
    }

}



