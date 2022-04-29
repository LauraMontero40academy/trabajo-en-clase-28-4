//1. Hacer un if con una variable let 
// Problema si estamos en el colegio pasar el año, primero tenemos que ver las notas del año del cole, en el colegio si la nota es 90 o mas pasamos el año, PROFE NO PUDE HACERLA BIEN PERO INTENTE!
var estudiando = true;

function cole () {
    if (estudiando == true){ 
        console.log('SI estamos en el cole');
    }else{
        console.log('NO estamos en el cole');
        return false;
    }
}
function pasarAño (estudiando = true){
    let nota = 0;
    if (nota >= 90){ 
        console.log('Pasamos el año');
    }else if (nota < 90){
        console.log('No pasamos el año');
    }
}
 cole();
 pasarAño();


//-------------------------------------------------------------------------------------------------------------
//2. Hacer una funcion que me diga 'Hola Profe, vea que chiva funcion'
function saludar () {
    console.log('Hola Profe, vea que chiva funcion');
}
    
saludar ();


//-------------------------------------------------------------------------------------------------------------
//3. Hacer una funcion que me sume 3 numeros (tienen que usar argumentos)
function suma_de_tres_numeros (numero1, numero2, numero3){
    console.log(numero1+numero2+numero3);
}

suma_de_tres_numeros(6,4,2);

//-------------------------------------------------------------------------------------------------------------
//4. Hacer una funcion que reciba una variable llamada var me_invitaron, y esa funcion responde 'eehhh me invitaron' o 'que mal no me invitaron'
var meInvitaron = false;

function fiesta () {
    if (meInvitaron == true){
        console.log('Eeeeeh, me invitaron!!');
    }else if (meInvitaron == false){
        console.log('Que mal no me invitaron :(');
    }
}

fiesta ();

//-------------------------------------------------------------------------------------------------------------
//5. Hacer una funcion que multiplique 3 numeros (tienen que usar argumentos)

function multiplica_de_tres_numeros (numero1,numero2,numero3){
    console.log(numero1*numero2*numero3);
}

multiplica_de_tres_numeros(5,2,4);
