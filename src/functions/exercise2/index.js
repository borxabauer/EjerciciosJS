let number = 0;

function plusone(number1) {
    number = number1 + 1;
    plusone(number);
    return number;

}




console.log(number)