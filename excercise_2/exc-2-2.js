function snakeToCamel(snake) {
    let res = ""
    snake.split("_").forEach((item, index)=>{
        index == 0 ? res += item : res += item[0].toUpperCase()+item.slice(1)
    })
    return res
}

console.log(snakeToCamel("some_new_word_to_transform_and_a")); //someNewWordToTransformAndA