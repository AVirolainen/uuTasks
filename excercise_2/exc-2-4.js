
var csvInput = "1,  Peter,  22;" +
    "2, Jim, 11,;" +
    "3, P eeter, 8 ;";

function tranformCsv(string) {
    return string.split(";")
                 .map(item => item.split(", "))
                 .slice(0, -1)
                 .map(item => {
                    return {id: item[0], name: item[1], age: item[2]}
                 })
}

console.log(tranformCsv(csvInput));
// [ { id: 1, name: 'Peter', age: 22 },
//    { id: 2, name: 'Jim', age: 11 },
//    { id: 3, name: 'P eeter', age: 8 } ]
