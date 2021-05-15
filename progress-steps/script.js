      let clicked = 1;

        let btn = document.getElementById('btn');
        btn.addEventListener('click', addCount());

        let btn1 = document.getElementById('btn1');
        btn1.addEventListener('click', decCount());

        function addCount(){
            if(clicked == 1){
                document.getElementById('l1').classList.add("active");
            }
            if(clicked == 2){
                document.getElementById('c2').classList.add("active");
            }
            if(clicked == 3){
                document.getElementById('l2').classList.add("active");
            }
            if(clicked == 4){
                document.getElementById('c3').classList.add("active");
            }

            clicked++;
            if(clicked >= 6){
                decCount();
            }
        }

        function decCount(){
            clicked--;
            if(clicked == 1){
                document.getElementById('l1').classList.remove("active");
            }
            if(clicked == 2){
                document.getElementById('c2').classList.remove("active");
            } if(clicked == 3){
                document.getElementById('l2').classList.remove("active");
            } if(clicked == 4){
                document.getElementById('c3').classList.remove("active");
            }
            if(clicked == 0){
                addCount();
            }
        }


        
