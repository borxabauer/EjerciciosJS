const phrase = "No hay bien que por mal no venga";
const counters = {};
function aGreatherThanB(a, b) {
    return a > b;
}


function bGreatherThanA(a, b) {
    return b > a;
}

function swap(idxA, idxB, array) {
    const temp = array[idxA];
    array[idxA] = array[idxB];
    array[idxB] = temp;
}

function sort(comparator, array) {
    for (let currentIdx = 0; currentIdx < array.length - 1; currentIdx++) {
        for (let nextIdx = currentIdx + 1; nextIdx < array.length; nextIdx++) {
            if (
                comparator(array[currentIdx], array[nextIdx])
            ) swap(currentIdx, nextIdx, array)
        }
    }
}

console.log(counters)