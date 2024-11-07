/** Arithmetic */
console.log("\n----- Arithmetic -----");
/** 가능한 Math의 함수를 쓰고, 괄호를 쓰기 */
a = 1 + 2;
console.log("🚀 ~ a:", a);
b = 1 - 2;
console.log("🚀 ~ b:", b);
c = 1 * 2;
console.log("🚀 ~ c:", c);
d = 1 / 2;
console.log("🚀 ~ d:", d);
e = 29 % 3;
console.log("🚀 ~ e:", e);

console.log("🚀 ~ a++:", a++);
console.log("🚀 ~ a++ result:", a);
console.log("🚀 ~ --a:", --a);

console.log("🚀 ~ 2**3**2:", 2 ** (3 ** 2)); // 2^9

console.log("🚀 ~ 1 + true:", 1 + true);

/** 할당 */
console.log("\n----- 할당 -----");
let aa = 1,
    bb = 2;
let cc = (aa++, bb++); // 2 , 3
let dd = (aa--, bb + aa); // 1 , 4
console.log("🚀 aa, bb, cc, dd :", aa, bb, cc, dd);
