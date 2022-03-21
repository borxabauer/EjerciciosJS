const numbers = [11,12,13,14]

// Put your code here

function swap(numberA,numberB,array){
    const number=array[numberA];
    array[numberA]=array[numberB];
    array[numberB]=number;
}
swap(0,3,numbers);
console.log(numbers);

swap(1,2,numbers);
console.log(numbers);