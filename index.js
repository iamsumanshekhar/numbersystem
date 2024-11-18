const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];
const evenNumbers = [];
const oddNumbers = [];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }else {
        oddNumbers.push(numbers[i]);
    }
}

console.log("Even Numbers : ", evenNumbers);
console.log("Odd Numbers : ", oddNumbers);

//prime number
function isPrime(num) {
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}
//array of prime numbers
const primeArray = [];
for(let i = 0; i < numbers.length; i++){
    if(isPrime(numbers[i])){
        primeArray.push(numbers[i]);
    }
}
//To find max and min in array
let max = primeArray[0];
let min = primeArray[0];
let sum = 0;

for (let i = 0; i < primeArray.length; i++){
    if(primeArray[i] > max) max = primeArray[i];
    if(primeArray[i] < min) min = primeArray[i];
    sum += primeArray[i];
}

console.log("Prime Numbers : ", primeArray);
console.log("Minimum :", min);
console.log("Maximun :", min);
console.log("Sum :", sum);