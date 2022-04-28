var input4 = [1, 2, 2, 4, 6, 9, 11, 12, 11, 666];

function findModus(arr) {
    let res = [];
    let mode = 0;
    arr.forEach((item) => {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (item == arr[i]) {
                counter += 1;
            }
        }
        if (counter > mode) {
            res = [item]
            mode = counter
        }
        else if (counter == mode && !res.includes(item)){
            res.push(item)
        }
    });
    return res
}

console.log(findModus(input4)); //[ 2, 11 ]
