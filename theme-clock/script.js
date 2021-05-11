let secC = document.getElementById('second');
let minC = document.getElementById('minute');
let hourC = document.getElementById('hour');
let night = document.getElementById('night');
let all = document.getElementById('all');

let h = document.getElementById('h');
let m = document.getElementById('m');
let s = document.getElementById('s');
let span = document.getElementById('span');
let datecss = document.getElementById('date');


function clock(){
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    hDeg = hour * 30 + minute * (360/720);
    mDeg = minute * 6 + second * (360/3600);
    sDeg = second * 6;

    console.log(hDeg, mDeg, sDeg);

    secC.style.transform = `rotate(${sDeg}deg)`;
    minC.style.transform = `rotate(${mDeg}deg)`;
    hourC.style.transform = `rotate(${hDeg}deg)`;
    
}
function displayDates(){

    var dateObj = new Date();
    var date = dateObj.getDate()
    var month = dateObj.getUTCMonth();
    var day = dateObj.getDay();
    var year = dateObj.getUTCFullYear();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  const dayName = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
     document.getElementById('day').innerHTML = date;
     document.getElementById('month').innerHTML = monthNames[month];
     document.getElementById('year').innerHTML = year;
     document.getElementById('dayname').innerHTML = dayName[day];
    
}
function displayClock(){
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    if(hour < 10){ 
      document.getElementById('h').innerHTML = "0" + hour;
    }else{
     document.getElementById('h').innerHTML = hour;  
    }

    if(minute < 10){ 
      document.getElementById('m').innerHTML = "0" + minute;
    }else{
     document.getElementById('m').innerHTML = minute;  
    }

    if(second < 10){ 
      document.getElementById('s').innerHTML = "0" + second;
    }else{
     document.getElementById('s').innerHTML = second;  
    }
  window.setInterval(displayClock, 1000);
}
let count = 1;
night.addEventListener('click', () => {
    count++;
    if(count % 2 == 1){
        //normal
        all.style.backgroundColor = "white";
        h.style.color = "black";
        m.style.color = "black";
        s.style.color = "black";
        span.style.color = "black";
        datecss.style.color = "black";
        night.style.backgroundColor = "white";
        night.style.color = "black";
        night.style.borderColor = "black";
        night.innerHTML = "Light Mode";
    }else if(count % 2 == 0){
        //night
        all.style.backgroundColor = "black";
        h.style.color = "white";
        m.style.color = "white";
        s.style.color = "white";
        span.style.color = "white";
        datecss.style.color = "white";
        night.style.backgroundColor = "black";
        night.style.color = "white";
        night.style.borderColor = "white";
        night.innerHTML = "Night Mode";
    }
});
displayDates();
displayClock();
setInterval(clock, 1000);
