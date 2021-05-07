function randomString(){

    var alphabet = document.getElementById('alphabet').value;
    var specialch = document.getElementById('specialch').value;
    var num = document.getElementById('num').value;
    
    var a = parseInt(alphabet);
    var b = parseInt(specialch);
    var c = parseInt(num);
    
    var length = a + b + c;


    if(Number.isNaN(a) && Number.isNaN(b) && Number.isNaN(c)){
        document.getElementById("input1").innerHTML = "Please enter atleast one numerical value to continue";
    }else{
        document.getElementById('input1').innerHTML =  "";
    }
    //   alphabet;
    // document.getElementById('input2').innerHTML = specialch;
    // document.getElementById('input3').innerHTML = num;
      
      
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
    var specialcharacters = "!@#$%^&*()_+";
      var numbers = "1234567890";
      
      var len1 = alphabet;  
      var len2 = specialch;
      var len3 = num;
      var randomString = "";
      
      for(var i = 0; i < len1; i++){
        var ch = Math.floor(Math.random() * characters.length);
        randomString = randomString + characters.substring(ch, ch+1);
      }
      
      for(var i = 0; i < len2; i++){
        var ch = Math.floor(Math.random() * specialcharacters.length);
        randomString = randomString + specialcharacters.substring(ch, ch+1);
      }
      
      for(var i = 0; i < len3; i++){
        var ch = Math.floor(Math.random() * numbers.length);
        randomString = randomString + numbers.substring(ch, ch+1);
      }
      
      let shuffleString = randomString.split('').sort(function(){return 0.5-Math.random()}).join('');


      document.getElementById("string").innerHTML = shuffleString;
      
    }



