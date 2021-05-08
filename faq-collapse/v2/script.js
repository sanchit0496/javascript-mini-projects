let a = document.getElementsByClassName('collapse');

let c = document.getElementById('logo').addEventListener('click', change);

for(let i = 0; i < a.length; i++){
  a[i].addEventListener('click', function(){
    let b = this.nextElementSibling;
    if(b.style.display === "none"){
      b.style.display = "block";
      b.style.padding = '5vh';
      b.style.width = '55vh';
      b.style.height = '5vh';
    }else{
      b.style.display = "none";
    }    
  }); 
}

function change(){
    c.classList.remove("fas fa-chevron-down");
}
