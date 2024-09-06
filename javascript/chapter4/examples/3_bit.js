/** 비트 연산자 */
console.log("\n----- 비트 연산자 &, |, ^, ~ -----");
let a = 0b1010,
    b = 0b1100;
console.log("🚀 ~ a & b:", (a & b).toString(2));
console.log("🚀 ~ a | b:", (a | b).toString(2));
console.log("🚀 ~ a ^ b:", (a ^ b).toString(2));
console.log("🚀 ~ ~b:", (~b).toString(2));

console.log("\n----- 비트 연산자 >>, >>>, <<-----");
console.log("🚀 ~ a>>1:", (a >> 1).toString(2));
console.log("🚀 ~ a>>>1:", (a >>> 1).toString(2));
console.log("🚀 ~ a<<1:", (a << 1).toString(2));
