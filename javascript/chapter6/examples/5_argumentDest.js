const user = { id: 1, name: "Hong", addr: { city: "Seoul" } };
function fn(arg1, { id, name }, arg2) {
    console.log(arg1, id, name, arg2);
}

fn(10, user, 20);

let un;

const [a] = un ?? [];

