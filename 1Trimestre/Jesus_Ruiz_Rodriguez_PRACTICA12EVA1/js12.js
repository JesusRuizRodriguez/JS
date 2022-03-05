//una variable dni que recoge la respuesta
var dni = prompt("Introduzca un dni");
        
//si la condicion del dni es true es valido sino es invalido
if(dni.match(/^\d{8}[trwagmyfpdxbnjzsqvhlckeTRWAGMYFPDXBNJZSQVHLCKE]$/)){
    document.write("El dni es valido");
}else{
    document.write("El dni no es valido");
}
