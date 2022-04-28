var newObj = {
    _value: 0,
    oldValues: [],
    get value() {
        return this._value;
    },
    set value(valueToSet) {
        this.oldValues.push(this._value);
        this._value = valueToSet
    },
};

newObj.value = 1;
newObj.value = 2;
newObj.value = 3;
newObj.value = 4;
console.log(newObj.oldValues); // [0, 1, 2, 3]
