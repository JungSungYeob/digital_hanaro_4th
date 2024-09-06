/** 반복문 */
console.log("\n----- 반복문 -----");
console.log("\n----- for문 -----");
for (let i = 0; i < 10; i++) {
  console.log("🚀 ~ i:", i);
}

/** for of : value 출력함 */
console.log("\n----- for of -----");
const arr = ["하나", "둘", "셋", "넷"];
for (let a of arr) {
  console.log("🚀 ~ a:", a);
}

/** for in index 출력함 */
console.log("\n----- for in -----");
for (let a in arr) {
  console.log("🚀 ~ a:", a);
}

console.log("\n----- while문 -----");
var didEnd = 10;
while (didEnd) {
  console.log("🚀 ~ didEnd:", didEnd);
  didEnd -= 1;
}

console.log("\n----- do-while문 -----");

do {
  didEnd += 1;
  console.log("🚀 ~ didEnd:", didEnd);
} while (didEnd < 10);
