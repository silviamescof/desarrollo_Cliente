

    let primosYpalindromos=[];

    //loop for view all number.//

    for(let i=1;i<10000;i++){

         ////// for know i is prime///
         let primo=true;
         let palindromo=false;

         for(let x=2;x<i;x++){
                
            if(i%x==0){
                primo=false;
                break;
            };
            
        };
        //If the number is prime, check if it is a palindrome.
        if(primo){
           let numero=i.toString();
           if(numero===numero.split('').reverse().join('')){
            palindromo=true;
           };
            
        };
        //If it meets both conditions, I insert it into the array
        if(primo===true && palindromo===true){
            primosYpalindromos.push(i);
        };
       
    };
        console.log("son primos y palindromos : ");

        primosYpalindromos.forEach(element => {
            console.log(element+',');
        });
