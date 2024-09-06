/** 숫자에 대한 고찰 */
console.log("\n----- 숫자에 대한 고찰-----");
console.log("🚀 ~ Number.isNaN(Infinity):", Number.isNaN(Infinity))
console.log("🚀 ~ Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1):", Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) //false
console.log("🚀 ~ Number.isSafeInteger(2222222222222222222222):", Number.isSafeInteger(2222222222222222222222)) //false
console.log("🚀 ~ Number.isSafeInteger(2222222222222222222222n):", Number.isSafeInteger(2222222222222222222222n)) //false

/**소수 자리 처리 */
console.log("\n----- 소수 자리 처리 -----");
const a = 1.2345678;
const b = 1.5678901
console.log("🚀 ~ a:", a)
console.log("🚀 ~ b:", b)

console.log("🚀 ~ Math.round(a):", Math.round(a)) // 반올림
console.log("🚀 ~ Math.round(b):", Math.round(b)) // 반올림

console.log("🚀 ~ Math.trunc(a):", Math.trunc(a)) // 버림
console.log("🚀 ~ Math.trunc(b):", Math.trunc(b)) // 버림

console.log("🚀 ~ Math.floor(a):", Math.floor(a)) // 버림
console.log("🚀 ~ Math.floor(b):", Math.floor(b)) // 버림

console.log("🚀 ~ a.toFixed(2):", a.toFixed(2)) // 소수 자릿수 고정(2자리 까지) 다만 string
console.log("🚀 ~ b.toFixed(2):", b.toFixed(2)) // 소수 자릿수 고정(2자리 까지) 다만 string

console.log("🚀 ~ parseFloat(a.toFixed(2)):", parseFloat(a.toFixed(2))) //float 변환
console.log("🚀 ~ parseFloat(b.toFixed(2)):", parseFloat(b.toFixed(2))) //float 변환

console.log("🚀 ~ +a.toFixed(2):", +a.toFixed(2)) //float 변환
console.log("🚀 ~ +b.toFixed(2):", +b.toFixed(2)) //float 변환


/** 부동소수점 처리 */
console.log("\n----- 부동소수점 처리 -----");
const c = 0.1;
const d = 0.33;
console.log("🚀 ~ c + d:", c + d)

console.log("🚀 ~ c + d === 0.43:", c + d === 0.43) //false

console.log("🚀 ~ Math.abs(c + d - 0.34) < Number.EPSILON:", Math.abs(c + d - 0.43) < Number.EPSILON) //false

