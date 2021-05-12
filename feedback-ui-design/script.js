let panel  = document.querySelector('#panel');
let rating = document.querySelectorAll('.rating');
let sendBtn = document.querySelector('#send');
let ratingContainer = document.querySelector('.ratings-container');

let selectedRating = 'Satisfied';

//remove all the active classes
function removeActive(){
    for (let index = 0; index < rating.length; index++) {
        rating[index].classList.remove('active');
    }
}

ratingContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')){
        //first remove the active class and then add to the clicked one
        removeActive();
        //small is the sibling of the image tag where we are clicking for the event
        selectedRating = e.target.nextElementSibling.innerHTML;
        e.target.parentNode.classList.add('active');
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})
