function f1(user) {
    console.log(user.id, user.name);
}

function f2({ id, name }) {
    console.log(id, name);
}

const f3 = ({ id, name }) => {
    console.log(id, name);
};

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

f1(hong);
f2(hong);
f3(hong);

f1(lee);
f2(lee);
f3(lee);
