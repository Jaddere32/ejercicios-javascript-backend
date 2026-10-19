const ciudad = "Bogota";
let experiencia = 2;

const yo ={
    nombre: jader,
    edad: 21,
    educacion: bachiller
};
//Leccion 2: Apto para vacante

let experienciaEmp = 2;
const mesesRequeridos = 0.6;

if(experienciaEmp >= mesesRequeridos){
    console.log("Apto para la vacante semi-junior");
}else{
    console.log("No apto para la vacante, Gracias")
}
//Leccion 3: Cuenta regresiva


for(let i = 1; i < 6; i++){
    console.log("Respaldo de la base en " + i);
}

//Leccion 4: Funciones Api

function saludoUsuario(Usuario){
    const bienvenido = "Hola " + Usuario + "bienvenido a la Api de Bogota";
    return bienvenido;
} 

let saludo = saludoUsuario("Jader");
console.log(saludo);
