let input = [1, 3, 6, 0, 5, -2, 9, 11, 16];

let total = 0;

input.forEach(item => {
	if(item % 2 == 0){
		total += item
	}
})

console.log(total) ; // 20