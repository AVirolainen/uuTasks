var changes = "+++-+---++--+-+-++";

function countOfChages(str) {
    return str.split("").filter(item => item != "-").length
}

console.log(countOfChages(changes)); //10