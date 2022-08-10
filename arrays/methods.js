// .pop() -> elimina el último elemento de un array y lo devuelve. MODIFICA array de origen.

console.log(numberArray)
const popArray = numberArray.pop()
console.log(popArray)
console.log(numberArray)

// .push() -> agrega elemento al final de una Array. Después devuelve la nueva longitud de la matriz. MODIFICA array de origen.

console.log(numberArray)
const pushArray = numberArray.push(100)
console.log(pushArray)
console.log(numberArray.push(500))
console.log(numberArray)

// .slice() -> devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). NO MODIFICA el array original.

console.log(compas);
const sliceCompas = compas.slice(1,4) //imprime desde el indice 1 hasta el 3. El Nº de corte (4 en este caso) NO lo incluye.
console.log(sliceCompas);
console.log(compas);

// .shift() -> elimina el primer elemento del array y lo retorna. MODIFICA array de origen.

console.log(numberArray)
const shiftArray = numberArray.shift()
console.log(shiftArray)
console.log(numberArray)

// .unshift() -> agrega nuevos elementos al comienzo de un array y devuelve la nueva longitud. MODIFICA el array original.

console.log(compas);
const unshiftCompas = compas.unshift("Marcelo")
console.log(unshiftCompas); // devuelve 6, que es la nueva longitud total del array
console.log(compas.length);
console.log(compas);

//.reverse() -> invierte el orden de los elementos de un array. MODIFICA el array original (orden invertido).

console.log(numberArray)
const reverseArray = numberArray.reverse()
console.log(reverseArray)
console.log(numberArray)

// .sort() -> ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. si es un array de strings lo ordena alfabéticamente. MODIFICA el array original.

console.log(numberArray)
console.log(numberArray.sort())
console.log(compas)
console.log(compas.sort())


//.join() -> une todos los elementos de un array en una cadena de STRINGS y devuelve esta cadena. NO MODIFICA el array original.

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

//.concat() -> junta 2 arrays en uno solo, NO MODIFICA los array originales.

const concatArray = numberArray.concat(compas)
console.log(concatArray);
console.log(numberArray);
console.log(compas);

//.lenght -> devuelve la cantidad de elementos en ese array. NO MODIFICA el array original.

console.log(numberArray)
console.log(numberArray.length)
console.log(compas)
console.log(compas.length)
