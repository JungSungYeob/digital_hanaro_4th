const user = { id: 1, name: "Hong", addr: { city: "Seoul", road: "길" } };

//const id = user.id;
const { id } = user;
console.log("🚀 ~ id:", id);

const { id: userId, name: userName } = user;
console.log("🚀 ~ userName:", userName);
console.log("🚀 ~ userId:", userId);

const arr = [1, 2, 3, 4, 5];
const { 1: x1, 3: x3 } = arr;
console.log("🚀 ~ x3:", x3);
console.log("🚀 ~ x1:", x1);

