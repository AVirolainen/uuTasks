var input6 = {a: 1, b: 2, ccc: "abl", "d": true};

function objectToString(obj) {
    let res = "";
    Object.entries(obj).forEach(item=>{
        res += `${item[0]} -> ${item[1]}; `
    })
    return res
}

console.log(objectToString(input6)); //(a -> 1; b -> 2; ccc -> abl; d -> true)