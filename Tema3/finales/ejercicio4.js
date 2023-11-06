

    let primosYpalindromos=[];

    //loop for view all number.//

    for(let i=1;i<10000;i++){

         ////// for know i is primo///
         let primo=true;
         let palindromo=false;

         for(let x=2;x<i;x++){
                
            if(i%x==0){
                primo=false;
            };
        };
        if(primo){
            //for know if, i is palindromo///
            if(i<10){
                palindromo=true;
            };
            if(i>=10 && i<100){
                if(Math.floor(i/10)==Math.floor(i%10)){
                    palindromo=true;
                };
            }else if(i>=100 && i<1000){
                if(Math.floor(i/100)==Math.floor(i%100)){
                    palindromo=true;
                };
            }else if(i>=1000 && i<10000){
                if(Math.floor(i/1000)==Math.floor(i%1000)){
                    palindromo=true;
                };
            };

            
        };

        if(primo&&palindromo)
            primosYpalindromos.push(i);
       
        };
       
        
        let texto="son primos y palindromos : ";

        primosYpalindromos.forEach(element => {
            console.log(texto+=element+',');
        });
