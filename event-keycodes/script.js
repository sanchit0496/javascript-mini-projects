let key = document.getElementById('key');
let keycode = document.getElementById('keycode');
let eventcode = document.getElementById('eventcode');
let hello = document.getElementById('hello');


window.addEventListener('keydown', function(e){
    key.innerHTML = `<p style = "font-size: 2.5vh">Key</p> ${e.key}`;
    keycode.innerHTML = `<p style = "font-size: 2.5vh">Key Code</p> ${e.keyCode}`;
    eventcode.innerHTML = `<p style = "font-size: 2.5vh">Event Code</p> ${e.code}`;;
    hello.style.display = "none";
    key.style.display = "block";
    keycode.style.display = "block";
    eventcode.style.display = "block";
    
});
