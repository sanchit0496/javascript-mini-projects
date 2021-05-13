const smallCups = document.querySelectorAll('.cup-small');
const listers = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

fillBig();

//adding event listener of filling function for every small cup
//used to get the index of clicked cup

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => fillCups(idx));
})

//function to fill the small cups
//if the cup clicked is full and the prev cup is also filled then the clicked cup will be empty, for ex, if 4 is clicked and 3 is also filled then 4 will be empty

//to access all the indexes before the index we are getting from smallCups function
//idx --> clicked idx2 --> all indexes before the idx
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



