const myName = "Melina";
const myAge = 20;
const isInARelationship = true;
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myPeers = ["Franco", "Fernando", "Ezequiel", "Debora", "Maximiliano"];

console.log("My name is "+ myName);
console.log(`I am ${myAge} years old`);
console.log(`Am I in a relationship? ${isInARelationship}`);
console.log("Counting to ten: " + myNumbers);
console.log("I can name Avalith skillers: " + myPeers);

const myInfo = {
    myName : "Melina",
    myAge : 20,
    isInARelationship : true,
    myNumbers : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    myPeers : ["Franco", "Fernando", "Ezequiel", "Debora", "Maximiliano"]
}

console.log(myInfo);

const ourPeers = myPeers.sort();
console.log("Our sorted array looks like: " + ourPeers);
ourPeers.push("Tomás");
console.log("Adding one person to our sorted array: " + ourPeers);

const num1 = parseInt(prompt("Ingrese su primer número: "));
const num2 = parseInt(prompt("Ingrese su segundo número: "));
if (num1 < num2) {
    alert("El segundo número es mayor");
} else if(num2 < num1) {
    alert("El primer número es mayor");
} else if(num1 === num2){
    alert("Los números son iguales");
} else{
    alert("Datos no válidos :(");
};