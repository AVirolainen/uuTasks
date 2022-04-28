var input2 = [1, 2, 4, 6, 9, 11, 11, 12];
var input3 = [1, 2, 4, 6, 9, 11, 11, 12, 13];

function findMedian(arr) {
    if (arr.length % 2 == 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    }
    return arr[Math.floor(arr.length / 2)];
}

console.log(findMedian(input2)); // 7.5
console.log(findMedian(input3)); // 9
