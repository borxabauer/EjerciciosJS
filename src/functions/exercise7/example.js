const numbers = [11,9,13,12,0,2,99,2,34,5,4,9,22,16,76,35,75,2,35,8,74]

function minorInRange (start, end, array) {
    // Empiezo suponiendo que el primer elemento
    // del rango es el menor.
    let minori = start;
    // Comparo el primer elemento del rango con
    // el siguiente y posteriores: start+1
    for (let i = start+1; i < end; i++) {
        if ( array[minori] > array[i] ) {
            minori = i;
        }
    }
    return minori
}

function swap (i1, i2, array) {
    const temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
}

function sort (array, start = 0) {
    let minori = minorInRange(start, array.length, array);
    if ( minori > start ) swap(start, minori, array);
    if ( start < array.length ) sort(array, ++start)
}

sort(numbers);

console.log(numbers);