// const user = { id: 1, name: "Hong", addr: { city: "Seoul" } };
// function fn(arg1, { id, name }, arg2) {
//     console.log(arg1, id, name, arg2);
// }

// fn(10, user, 20);

// let un;

// const [a] = un ?? [];
user = {id: 1, name: 'P', age: 33}
const fn = ({age}) => age; 
const {age2:age3 = fn(user)} = { age2: 20 };
console.log("🚀 ~ age3:", age3)


const arr = [1, 2, [3,4], [5,6], {ax: 7, ay: 8}, {ax: 9}];
const [ , , , , {ay:a1}, {ax:a2}] = arr;
console.log("🚀 ~ a2:", a2)
console.log("🚀 ~ a1:", a1)
