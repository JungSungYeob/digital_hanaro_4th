const { id, name, addr = "Seoul" } = { id: 1, name: "Hong" };
console.log("🚀 ~ id,name,addr:", id, name, addr);

const { id2, name2 = "Hong" } = { id2: 1, name2: "" };
console.log("🚀 ~ id2, name2:", id2, name2);
const { id3, name3 = "Hong" } = { id3: 2, name3: undefined };
console.log("🚀 ~ id3, name3:", id3, name3);

const [e, f, g = 3] = [1, 2, 0];
console.log("🚀 ~ e, f, g:", e, f, g);

const obj = { i: 1, j: 2, l: 3, m: 4, n: 5 };
let { j, i, k = i * j } = obj;
console.log("🚀 ~ j, i, k:", j, i, k);

const {y,x=y*10,z} = obj;
console.log("🚀 ~ x:", x)

let q, s, r;
({ r = q * 10, q, s } = { q: 10, s: 20 });

console.log("🚀 ~ r, q, s:", r, q, s);

const arr = [1, 2, 3, 4, 5];
const [a1, a2, ...rest] = arr;
console.log("🚀 ~ a1,a2,...rest:", a1, a2, ...rest);
//const {l,m,...resObj} = obj;
//console.log("🚀 ~ l,m,...resObj:", l,m,...resObj)
