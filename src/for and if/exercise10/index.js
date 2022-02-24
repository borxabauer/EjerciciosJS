let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3]

for (let i = 0;  i< numbers.length; i++) {
    for (let y = i; y < numbers.length; y++) {
        if (numbers[i] > numbers[y]) {
            let temporal = null;
            temporal = numbers[i];
            numbers[i] = numbers[y];
            numbers[y] = temporal;
        }
    }

}