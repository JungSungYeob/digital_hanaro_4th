/** 방법 1 */
for (let i = 1; i <= 10; i++) {
    console.log(i / 10);
}
console.log();

/** 방법 2 */
for (let i = 0.1; i <= 1; i += 0.1) {
    console.log(parseFloat(i.toFixed(2)));
}
console.log();

/** 방법 3 */
for (let i = 0.1; i <= 1; i += 0.1) {
    i = Math.round(i * 10) / 10;
    console.log(i);
}
console.log();

/** 방법 4 */
for (let i = 0.1; i <= 1; i += 0.1) {
    console.log(i.toPrecision(1));
}
