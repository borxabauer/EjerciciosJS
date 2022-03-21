const numbers = [11,9,13,12]

// Put your code here
function minorInRange(index1, index2, array){
    let valorMenor=array[index1];
        if(array[index1]>array[index2]){
            valorMenor=array[index2];
        }

    return valorMenor;
console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3),numbers);