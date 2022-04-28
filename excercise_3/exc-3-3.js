let persons = [
    {firstName: "Jim", lastName: "Jimithy", age: 15},
    {firstName: "Peter", lastName: "Peterson", age: 25},
    {firstName: "Carl", lastName: "Carlson", age: 28},
    {firstName: "Jane", lastName: "Janison", age: 22}
];

let oldestPerson = persons[0]
for(let key of persons){
    if(oldestPerson.age < key.age){
        oldestPerson = key
    }
}

console.log(oldestPerson); // { firstName: 'Carl', lastName: 'Carlson', age: 28 }