input5 = [1, 4, 2, 1, 2, 2, 2, 3, 9, 8, 33];

function findUnique(arr) {
    let res = [];
    arr.forEach(item => {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == item) {
                counter += 1;
            }
        }
        if (counter < 2) {
            res.push(item);
        }
    });
    return res.sort((a,b) => a-b);
}

console.log(findUnique(input5)); // [ 3, 4, 8, 9, 33 ]
