function camelToSnake(camel) {
    let res = "";
    camel.split("").forEach((item) => {
        item.toUpperCase() == item
            ? (res += `_${item.toLowerCase()}`)
            : (res += item);
    });
    return res;
}

console.log(camelToSnake("someNewWordToTransformAndA")); //some_new_word_to_transform_and_a
