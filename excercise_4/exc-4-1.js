var obj = {
    a: 2,
    b: "22",
    c: false,
    d: "b",
    f: 3.14,
    g: 42,
};

const count = (objectToCount) => {
    let counter = 0;
    Object.values(objectToCount).forEach((item) => {
        if (typeof item == "number") {
            counter += 1;
        }
    });
    return counter
};

console.log(count(obj)); // 3
