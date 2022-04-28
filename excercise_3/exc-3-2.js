
function acceptThreeFunctions(firstFn, secondFn, thirdFn, value = 42) {
    return Math.max(firstFn(value), secondFn(value), thirdFn(value))
}

console.log(acceptThreeFunctions(a => a * 2, b => b * 3, c => c * 4)); // 168