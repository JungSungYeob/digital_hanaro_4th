function f1(this: number, x: number) {
    return x + this;
}
function f2(this: void, x: number) {
    return x + 1;
}


f1.bind(1);
// f2.bind(2);