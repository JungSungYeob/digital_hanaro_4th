let count = 0; //외부변수(오염 우려)
function counter() {
    count += 1;
    return count;
}

console.log(counter());
console.log(counter());
console.log(counter());
count = 500;
console.log(counter());
