/** 조건문 */
console.log("\n----- 조건문 -----");

const x = 5;
// x가 1이면 one, 2면 two, 3이면 three, 그 외 etc

/** if문 */
if (x === 1) {
    console.log("🚀 ~ one")
} else if (x === 2) {
    console.log("🚀 ~ two")
} else if (x === 3) {
    console.log("🚀 ~ three")
} else {
    console.log("🚀 ~ etc")
}

/** switch 문 */
switch (x) {
    case 1:
        console.log("🚀 ~ one");
        break;
    case 2:
        console.log("🚀 ~ two");
        break;
    case 3:
        console.log("🚀 ~ three");
        break;
    default:
        console.log("🚀 ~ etc");
}

/** 3항 연산자 */
x === 1 ?
    console.log("🚀 ~ one") : x === 2 ?
        console.log("🚀 ~ two") : x === 3 ?
            console.log("🚀 ~ three") : console.log("🚀 ~ etc");


/** or 연산자 */
console.log((x === 1 && "🚀 ~ one") || (x === 2 && "🚀 ~ two") || (x === 3 && "🚀 ~ three") || ("🚀 ~ etc"));
