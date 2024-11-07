let x, y;
x = y = 9;
const z = (y++, x + y);
console.log("🚀 ~ x, y ,z:", x, y, z);

const u1 = { id1: 1, name1: "Hong", age1: 29 };

let { id1, name1, addr1 } = u1;
console.log("🚀 ~ id, name, addr:", id1, name1, addr1);

const u2 = { id2: 1, name2: "Hong", age2: 29 };
let { id2, ...info } = u2;
console.log("🚀 ~ id, ...info:", id2, info);

const u3 = { id3: 1, name3: "Hong", age3: 29 };
let id3, name3;
({ id3, name3 } = u3);
console.log("🚀 ~ id3,name3:", id3, name3);

/** swap */
const arr = [1, 2, 3, 4, 5];
let [a, b, ...c] = arr;
console.log("🚀 ~ a ,b:", a, b);
[a, b] = [b, a];
console.log("🚀 ~ a ,b:", a, b);
