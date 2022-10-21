//Definir una función que retorna TRUE si el parámetro de entrada “str” que es
//un string está “vacío” o lleno de espacios en blanco

function estaVacio(str){
    if(str == " "){
        return true;
    }else{
        return false;
    }
}
console.log("challenge 1 - isEmpty", estaVacio(" jj"));
console.log(estaVacio(" "));
console.log(estaVacio("hola"));

//Definir una función que retorna TRUE si el parámetro de entrada “str” que es
//un string incluye la subcadena “123”

function incluye123(str){
    if(str.includes("123")){
        return true;
    }else{
        return false;
    }
}
console.log("challenge 1 - isEmpty", incluye123(" jj"));
console.log(incluye123("hola123"));
console.log(incluye123("hola"));

//Definir una función que retorna un json con las características deseables de
//una persona basado en el parámetro de entrada “accountType”.
//a. Básica: estudiante, 18, mexicano.
//b. Oro: profesionista junior, 25, mexicano.
//c. Plata: profesionista senior, 35, cualquier nacionalidad
//d. Elite: dueño de empresa, 50, cualquier nacionalidad
//e. Descanso: jubilado, 75, mexicano

function persona(accountType){
    if(accountType == "basica"){
        return "estudiante, 18, mexicano";
    }else if(accountType == "oro"){
        return "profesionista junior, 25, mexicano";
    }else if(accountType == "plata"){
        return "profesionista senior, 35, cualquier nacionalidad";
    }else if(accountType == "elite"){
        return "dueño de empresa, 50, cualquier nacionalidad";
    }else if(accountType == "descanso"){
        return "jubilado, 75, mexicano";
    }
}
console.log("challenge 1 - isEmpty", persona(" jj"));
console.log(persona("basica"));
console.log(persona("oro"));
console.log(persona("plata"));
console.log(persona("elite"));
console.log(persona("descanso"));

//Definir una función que recibe un arreglo de números, y utilizando un ciclo for
//retorna el número más grande de todo el arreglo

function numeroMasGrande(arreglo){
    let numero = 0;
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] > numero){
            numero = arreglo[i];
        }
    }
    return numero;
}

console.log(numeroMasGrande([1,2,3,4,5,6,7,8,9,10]));
