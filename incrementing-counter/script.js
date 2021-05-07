
   let fb = document.getElementById('fbcount');
   let tw= document.getElementById('twittercount');
   let insta = document.getElementById('instagramcount');
   let twitch= document.getElementById('twitchcount');

   let current = 0;

   function facebook(){
        let fbcount = 1653400;
                
        if(current < fbcount){
            let increment = Math.ceil(fbcount/ 19);
            current = current + increment;
            fb.innerHTML = current;
            setTimeout(facebook, 80);
        }else{
            fb.innerHTML = fbcount;
        }
   }

   function twitter(){
        let twcount = 1435600;
                
        if(current < twcount){
            let increment = Math.ceil(twcount/ 19);
            current = current + increment;
            tw.innerHTML = current;
            setTimeout(twitter, 75);
        }else{
            tw.innerHTML = twcount;
        }
   }

   function instagram(){
        let instcount = 1232400;
                
        if(current < instcount){
            let increment = Math.ceil(instcount/ 9);
            current = current + increment;
            insta.innerHTML = current;
            setTimeout(instagram, 95);
        }else{
            insta.innerHTML = instcount;
        }
   }

   function twitchfunction(){
        let twitchcount = 943000;
                
        if(current < twitchcount){
            let increment = Math.ceil(twitchcount/ 19);
            current = current + increment;
            twitch.innerHTML = current;
            setTimeout(twitchfunction, 85);
        }else{
            twitch.innerHTML = twitchcount;
        }
   }


facebook();
twitter();
instagram();
twitchfunction();

