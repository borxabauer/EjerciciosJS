const numbers = [0,99,3,121,12,1,2];
let sum = 0;
let average = 0;
let contador=0;

for (let item of numbers){
    sum=sum+item;
    contador++;
}
average=sum/contador;

console.log(average);