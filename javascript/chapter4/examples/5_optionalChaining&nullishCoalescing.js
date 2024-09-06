/** Optional Chaining */
console.log("\n----- Optional Chaining -----");
var arr;
console.log("🚀 ~ arr:", arr)
console.log("🚀 ~ arr?.length:", arr?.length) //null이거나 undefined인 경우 undefined 반환


/** Nullish Coalescing Operator */
console.log("\n----- Nullish Coalescing Operator -----");
console.log("🚀 ~ arr:", arr)
arr = arr ?? "Hello"; //null이거나 undefined인 경우 뒤에것을 반환
console.log("🚀 ~ arr:", arr)