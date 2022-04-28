let anotherObj = {
    a: 1,
    _b: 2,
    _c: 4,
    _d: () => {},
    e: () => {}
};

Object.keys(anotherObj).map(item => {
    if(item.startsWith("_")){
        delete anotherObj[item]
    }
})

console.log(anotherObj); //{ a: 1, e: [Function: e] }
