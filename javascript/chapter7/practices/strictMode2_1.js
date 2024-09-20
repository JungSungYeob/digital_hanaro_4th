"use strict";

var gg;
let bb;

function f1(x, y) {
    var gg = 11;
    let bb = 22;

    console.log("f1>", gg, bb, zz, f2, f2.length);
    f2("* first");
    {
        const xx = 99;
        f2("* nest-first");
        var zz = 88;
        function f2(t) {
            console.log(t, "nested", xx, zz);
        }
    }
    function f2(t, u) {
        console.log(t, "inner", xx, zz);
    }

    function f2(t, u, v) {
        console.log(t, "inner2", xx, zz);
    }

    var zz = 800;

    console.log(gg);
    f2("* second");
}
function f2(g) {
    console.log(g, "global f2>", gg, bb, xx, kk);
}

let xx;

/* -------------------------------- */

gg = 1;
bb = 2;
xx = 9;
if (gg > 0) {
    var kk;
    const yy = 9;
    kk = 33;
}
f1(1, 2);
console.log("kkkkkk>> ", kk);
f2("* third");
