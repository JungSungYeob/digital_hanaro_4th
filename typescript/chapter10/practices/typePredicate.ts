const isStringNumber = (value: unknown): value is [string, number] => {
    console.log();
};

const f12 = (value: number | string | boolean | [string, number]) => {
    if (isStringNumber(value)) {
        console.log(value[0].toUpperCase(), value[1].toFixed());
    }
};

interface Animal {}

interface Dog extends Animal {
    name: string;
}
interface Cat extends Animal {
    punch(): void;
}
class Retriever implements Dog {
    name!: string;
}

function isDog(a: Animal): a is Dog {

    return true;
}
