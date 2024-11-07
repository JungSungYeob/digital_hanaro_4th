"use strict";

aaa = 1;
console.log("🚀 ~ aaa:", aaa);

var aaa; //선언하지 않은 식별자는 var 가능
// const aaa; // 이미 했으니 안됨
console.log("🚀 ~ aaa:", aaa);

var aa = 1;
// delete aa; // delete 사용불가
console.log(aa);

function f1(a, ax) {
    console.log("f1", aa);
}

// Error
// NaN =1;
// Infinite = 1;

{
    var aa = 2;
    function f1() {
        console.log("inner-f1", aa);
    }
}

f1(); // f1 호출, inner-f1 X


