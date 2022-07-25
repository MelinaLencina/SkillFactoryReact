// MÉTODOS ARRAYS JAVASCRIPT

// .pop() - .shift() - .push() - .slice() - .unshift() - .reverse() - .join() - .concat() - .lenght - .sort()

// .pop() -> elimina el último elemento de un array y lo devuelve. MODIFICA array de origen.
/*
console.log(numberArray)
const popArray = numberArray.pop()
console.log(popArray)
console.log(numberArray)
*/

// .shift() -> elimina el primer elemento del array y lo retorna. MODIFICA array de origen.
/*
console.log(numberArray)
const shiftArray = numberArray.shift()
console.log(shiftArray)
console.log(numberArray)
*/

// .push() -> agrega elemento al final de una Array. Después devuelve la nueva longitud de la matriz. MODIFICA array de origen.
/*
console.log(numberArray)
const pushArray = numberArray.push(100)
console.log(pushArray)
console.log(numberArray.push(500))
console.log(numberArray)
*/

// .slice() -> devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). NO MODIFICA el array original.
/*
console.log(compas);
const sliceCompas = compas.slice(1,4) //imprime desde el indice 1 hasta el 3. El Nº de corte (4 en este caso) NO lo incluye.
console.log(sliceCompas);
console.log(compas);
*/

// .unshift() -> agrega nuevos elementos al comienzo de un array y devuelve la nueva longitud. MODIFICA el array original.
/*
console.log(compas);
const unshiftCompas = compas.unshift("Marcelo")
console.log(unshiftCompas); // devuelve 6, que es la nueva longitud total del array
console.log(compas.length);
console.log(compas);
*/

// .reverse() -> invierte el orden de los elementos de un array. MODIFICA el array original (orden invertido).
/*
console.log(numberArray)
const reverseArray = numberArray.reverse()
console.log(reverseArray)
console.log(numberArray)
*/

// .join() -> une todos los elementos de un array en una cadena de STRINGS y devuelve esta cadena. NO MODIFICA el array original.
/*
console.log(numberArray)
const joinArray = numberArray.join()
console.log(joinArray)
console.log(typeof(joinArray));
console.log(numberArray)

console.log(compas)
const joinCompas = compas.join()
console.log(joinCompas)
console.log(typeof(joinCompas));
console.log(compas)
*/

// .concat() -> junta 2 arrays en uno solo, NO MODIFICA los array originales.
/*
const concatArray = numberArray.concat(compas)
console.log(concatArray);
console.log(numberArray);
console.log(compas);
*/

// .lenght -> devuelve la cantidad de elementos en ese array. NO MODIFICA el array original.
/*
console.log(numberArray)
console.log(numberArray.length)
console.log(compas)
console.log(compas.length)
*/

// .sort() -> ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. si es un array de Strings lo ordena segun el alfabeto. Si es un array de Numbers ordena los numeros alfabeticamente (javascript) ej: 

/* 
Por qué el método sort() no funciona con números
En realidad está funcionando, pero este problema ocurre porque JavaScript ordena los números alfabéticamente. Déjame explicarte esto en detalle.
Pensemos en A=1, B=2 y C=3.
const miArreglo = ['C', 'BC', 'AB'];
miArreglo.sort(); // [AB, BC, C]
Por ejemplo, si tenemos tres cadenas como C (3), BC (23) y AB (12), JavaScript las ordenará como AB, BC y C en orden ascendente, lo que es alfabéticamente correcto.
Sin embargo, JavaScript ordenará los números (alfabéticamente nuevamente) como 12, 23 y 3, lo cual es incorrecto.

fuente: https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/
*/
/*
console.log(numberArray)
console.log(numberArray.sort())
console.log(compas)
console.log(compas.sort())
*/