const myName = "Melina";
const myAge = 20;
const isInARelationship = true;
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myPeers = ["Franco", "Fernando", "Ezequiel", "Debora", "Maximiliano"];

console.log(myName);
console.log(myAge);
console.log(isInARelationship);
console.log(myNumbers);
console.log(myPeers);

const myInfo = {
    myName : "Melina",
    myAge : 20,
    isInARelationship : true,
    myNumbers : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    myPeers : ["Franco", "Fernando", "Ezequiel", "Debora", "Maximiliano"]
}

console.log(myInfo);

const ourPeers = myPeers.sort();
console.log();
ourPeers.push("Tomás");
console.log(ourPeers);

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