/** 3항 연산자 */
console.log("\n----- 3항 연산자 -----");
const x = 5;
console.log("🚀 ~ x>0 :", x > 0 ? "양수" : "not 양수");

/** 비교 연산자 truthy vs falshy */
console.log("\n----- 비교 연산자 truthy vs falshy -----");
console.log("🚀 ~ !!undefined:", !!undefined);
console.log("🚀 ~ !!null:", !!null);
console.log("🚀 ~ !!false:", !!false);
console.log("🚀 ~ !!0:", !!0);
console.log("🚀 ~ !!NaN:", !!NaN);
console.log("🚀 ~ !!'':", !!"");
console.log("🚀 ~ !![]:", !![]); // true: 빈 배열은 truthy

/** 부등호 값 비교 */
console.log("\n----- 부등호 값 비교 -----");
const a = "hello";
console.log("🚀 ~ a === 'hello' :", a === "hello"); // true
console.log("🚀 ~ a === 'bye' :", a === "bye"); //false
console.log("🚀 ~ NaN === NaN :", NaN === NaN); //false

/** || 그리고 && */
console.log("\n----- || 그리고 && -----");
const T = true,
    F = false;
let z = 1;
console.log("🚀 ~ T || z++, T && z++, z", T || z++, T && z++, z); //true 1 2
console.log("🚀 ~ F || z++, F && z++, z", F || z++, F && z++, z); //2 false 3

/** 이름 표현 */
console.log("\n----- 이름 표현하기 -----");
const first = "",
    last = "Bob";
console.log(`🚀 ~ ${first} ${last}`); // bad... : Why? -> first 미입력 시 공백 후 last 출력
console.log(`🚀 ~ ${first}${first ? " " : ""}${last}`); // Good -> 삼항 연산자를 통해 first(있으면 true 없으면 false) 공백 여부 결정
console.log(`🚀 ~ ${first}${first && " "}${last}`); // Best! -> &&로 first가 true이면 공백 없으면 무시 : 좀 생각하기 빡세네;

/** 착각하기 쉬운 연산 */
console.log("\n----- 착각하기 쉬운 연산 -----");
console.log("🚀 ~ false === null :", false === null); //false
console.log("🚀 ~ false === !!null :", false === !!null); //true
console.log("🚀 ~ null == 0 :", null == 0); //false
console.log("🚀 ~ [] == 0 :", [] == 0); //true
console.log("🚀 ~ !![] === !!0 :", !![] === !!0); //false
console.log("🚀 ~ isFinite(0):", isFinite(0)); //true
console.log("🚀 ~ isFinite('str'):", isFinite("str")); //false
console.log("🚀 ~ isNaN('9'):", isNaN("9")); //false
