function printIrr(num) {
    do {
        console.log(`${num} ${Math.sqrt(num).toFixed(3)}`);
    } while (Math.sqrt(++num) % 1 !== 0);
}

printIrr(5);

console.log();

printIrr(9);
