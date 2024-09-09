const [a, b] = [1, 2];
console.log("🚀 ~ a, b:", a, b);
let c, d;
[c, d] = [1, 2];
console.log("🚀 ~ c, d:", c, d);

const [, , e] = [1, 2, 3];
console.log("🚀 ~ e:", e);
const [, x, , y, , z] = [1, 2, 3, 4, 5, 6];
console.log("🚀 ~ x, y, z:", x, y, z);

const users = [
    { id: 1, name: "Hong" },
    { id: 2, name: "Kim" },
    { id: 3, name: "Jung" },
];

const [, { id: usrId }] = users;
console.log("🚀 ~ usrId:", usrId);
