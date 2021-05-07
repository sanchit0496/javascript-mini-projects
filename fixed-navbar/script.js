let navbar = document.getElementById('navbar');
        window.onscroll = function(){
            if(window.scrollY > 350){
                navbar.style.backgroundColor = "white";
            }else{
                navbar.style.backgroundColor = "transparent";
            }
}
