//1. Crea tres variables: una que almacene tu nombre (string), otra tu edad (number), y otra que indique si tienes mascotas (boolean). 
// Luego imprímelas por consola.
let nombre = "Jeremi";
let edad = 21;
let tieneMascotas = true;

console.log("1)");
console.log("nombre:", nombre);
console.log("edad:", edad);
console.log("tiene mascotas:", tieneMascotas);

//2. Crea dos variables numéricas y muestra en consola su suma, resta, multiplicación y división.
let num1 = 10;
let num2 = 5;

console.log("\n2)");
console.log("numero 1:", num1, "y numero 2:", num2);
console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicacion:", num1 * num2);
console.log("Division:", num1 / num2);

// 3. Crea una función que reciba un nombre como parámetro y devuelva un saludo como string.
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log("\n3)");
console.log(saludar("Canella"));

//4. Crea un array con 5 frutas y recórrelo con un bucle for, mostrando cada fruta en consola.
let frutas = ["manzana", "sandia", "platano", "limon", "kiwi"];

console.log("\n4)");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//5. Crea un array de 3 números, multiplícalos por 2 y guárdalos en un nuevo array usando map.
let numeros = [1, 2, 3];
let numerosMultiplicados = numeros.map(num => num * 2);

console.log("\n5)");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
console.log("multiplicador por 2:", numerosMultiplicados);

//6. Crea un array de objetos donde cada objeto tenga un nombre y una edad. 
// Luego, muestra en consola el nombre de cada persona usando forEach.
let personas = [
  { nombre: "Julian", edad: 18 },
  { nombre: "Kevin", edad: 21 },
  { nombre: "Krishna", edad: 23 }
];

console.log("\n6)");
personas.forEach(persona => {
  console.log(persona.nombre);
});

//7. Crea un array de números y utiliza filter para obtener los números mayores a 5.
let numeros2 = [1, 8, 3, 7, 2, 13, 5, 4, 0];
let mayoresA5 = numeros2.filter(num => num > 5);

console.log("\n7)");
for(let i = 0; i < numeros2.length; i++){
    console.log(numeros2[i]);
   }
console.log("numeros mayores a 5:", mayoresA5);

// 8. Crea un array de números y usa reduce para obtener la suma total.
let numeros3 = [4, 3, 2, 7, 9, 10, 11];
let sumaTotal = numeros3.reduce((acumulador, actual) => acumulador + actual, 0);

console.log("\n8)");
for(let i = 0; i < numeros3.length; i++){
 console.log(numeros3[i]);
}
console.log("suma total:", sumaTotal);

// 9. Crea una función asincrónica que espere 2 segundos y luego devuelva un mensaje. Usa await para esperar su resultado e imprimirlo.
async function mensajeAsync() {
  await new Promise(resolve => setTimeout(resolve, 2000)); //2 segundos
  return "Han transcurrido 2 minutos";
}

console.log("\n9)");
async function mostrarMensaje() {
  const mensaje = await mensajeAsync();
  console.log(mensaje);
}

mostrarMensaje();
