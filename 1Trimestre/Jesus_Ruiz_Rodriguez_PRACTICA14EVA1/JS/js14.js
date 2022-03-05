        
    const minus='a,á,à,b,c,ç,d,e,é,è,f,g,h,i,ì,í,j,k,l,m,n,ñ,o,ó,ò,p,q,r,s,t,u,ù,ú,ü,v,w,x,y,z';
    const mayus = minus.toUpperCase();
    var permiso = false;
    var statusMayus = false;
    var arrayMinus = minus.split(",");
    var arrayMayus = mayus.split(",");

    do{
        var user = prompt("Introduzca el nombre de usuario");
        var pass = prompt("Introduzca la contraseña");

        //cuando se pulse el boton "Cancelar" se saldra del bucle
        if(user == null){
            alert("Cerrando programa");
            permiso = false;
                    
        }

        //bucle que busca si existe alguna mayuscula en los caracteres introducidos
        for(var y=0; y<user.length;y++){
            //en caso de que exista alguna mayuscula en los datos introducidos se asignara true a statusMayus
            if(arrayMayus.includes(user[y])){
                permiso = false;
                statusMayus = true;
                //no se mirarán mas condiciones debido a que ya es una condicion que no se debe dar
                break;
                //se comprueba que no sea una cadena vacia debido a que sino se mostraria un aviso equivoco
            }else if(user !== "" && user !== " "){
                permiso = true;
            }   
        }

        //cuando haya mayusculas se mostrara este mensaje
        if(statusMayus == true){
            alert("No se permiten Mayusculas en el usuario");
        }
        
        //si usuario esta vacio o se introduce un espacio en blanco se mostrara el mensaje
        if(user == ""|| user == " "){
            alert("Introduzca algun valor en el usuario");
            permiso =false;
        }
        
        //cuando la contraseña este vacia o tenga un espacio se mostrara el aviso
        if(pass == "" || pass == " "){
            alert("Introduzca una contraseña valida");
        }

    //el bucle se ejecutara mientras la longitud sea 1 o más en la contraseña y el usuario, y permiso sea true     
    }while(user.length < 1 || permiso == false || pass.length<1)
            
        
        if(permiso == true){
            alert("Usuario valido !!");
        }