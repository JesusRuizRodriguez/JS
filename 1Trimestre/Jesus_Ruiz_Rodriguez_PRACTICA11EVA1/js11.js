    //se genera un numero aleatiorio entre el 1 y el 100
    var nr = Math.floor(Math.random() * (100-1) +1);
    var contador = 0;
    var acierto = false;
        
    //bucle que entra siempre que la variable sea false
    while(acierto == false ){ 
    
        //se hace la pregunta al usuario y se pasa a tipo entero para poder hacer comparaciones 
        var txtask = prompt("Adivine el numero");
        var ask = parseInt(txtask);   
        ++contador;
            
        //se comprueba que se le da al boton de cancelar
        if(txtask == null){
        document.write("FIN");
        acierto=true;

        //en caso de que se introduzcan valores que no sean numeros entre 1 y 100 se muestra el mensaje
        }else if(isNaN(ask) || ask<1 || ask >100){
        document.write("Introduzca un numero entre el 0 y el 100"+"<br>");

        //se da un mensaje cuando el numero introducido es menor    
        }else if(ask < nr){
        document.write("El numero es mayor"+"<br>");

        //se da un mensaje cuando el numero que se introduce es mayor                
        }else if(ask > nr){
        document.write("El numero es menor"+"<br>");
        
        //se acierta el numero y se muestra los intentos
        }else if(ask == nr){
        acierto = true;
        --contador;
        document.write("Has acertado!!"+"<br>");
        document.write("Has utilizado "+contador+" intentos"+"<br>");
        
        }

    }