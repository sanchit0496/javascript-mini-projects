let a = document.getElementById('cardimage');
let b = document.getElementById('cardhead');
let c = document.getElementById('cardinfo');
let d = document.getElementById('cardprice');

setTimeout(disp, 2500);

function disp(){
    a.classList.remove("card");
    a.classList.add("cardloaded");
    a.innerHTML = `<img src = "https://hackernoon.com/hn-images/1*9npNPVH7iNJ64Koq7EcW5A.jpeg">`;
    
    b.style.backgroundImage = "none";
    b.style.backgroundColor = 'white';
    b.innerHTML = "Full Stack Development Course";
    
    c.innerHTML = "Learn HTML, CSS, JavaScript, AngularJS, React, MongoDB, Node and other exciting technologies";
    c.style.backgroundImage = "none";
    c.style.backgroundColor = 'white';
    
    d.innerHTML = "Price: $99.99";
    d.style.backgroundImage = "none";
    d.style.backgroundColor = 'white';
}

