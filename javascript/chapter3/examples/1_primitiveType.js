/** Primitive Type : Number, BigInt, String, Boolean, undefined, null, Symbol */

/** Number < 2^53 */
const num = 123;
console.log("🚀 ~ num:", num)
console.log("🚀 ~ type of num:", typeof (num)); // number


/** BigInt >= 2^53 */
const bigNum = 123n; // n이 붙으면 bigint 처리
console.log("🚀 ~ bigNum:", bigNum)
console.log("🚀 ~ type of bigNum:", typeof (bigNum)); //bigint


/** 엄격한 비교: 값 뿐만 아니라 타입까지 비교 */
console.log("🚀 ~ num === bigNum:", num === bigNum); //false
/** 느슨한 비교: 타입 변환을 허용하여 값을 비교 */
console.log("🚀 ~ num == bigNum:", num == bigNum); //true


/** Number + BigInt */
//console.log("🚀 ~ num + bigNum:", num + bigNum); //TypeError


/** String */
const s = 'abc';
console.log("🚀 ~ s:", s)
console.log("🚀 ~ type of s:", typeof (s)); //string

/** String Object */
const ss = new String('abc')
console.log("🚀 ~ ss:", ss)
console.log("🚀 ~ type of ss:", typeof (ss)) //object, not primitive


/** 형변환 */
console.log("🚀 ~ Number(s):", Number(s)) //NaN
console.log("🚀 ~ BigInt(num):", BigInt(num)) //123n
console.log("🚀 ~ Number(bigNum):", Number(bigNum)) //123
console.log("🚀 ~ Number('1234'):", Number('1234')) //1234
console.log("🚀 ~ +'12345':", +'12345') //12345


/** 문자열 & 숫자 저장 */
const sss = `${s} + ${num + Number(bigNum)}`;
console.log("🚀 ~ sss:", sss) //abc + 246


/** Boolean Type */
const b = false;
console.log("🚀 ~ b:", b) // false
console.log("🚀 ~ type of b:", typeof(b)) // boolean

/** Boolean Object */
const bb = new Boolean(true);
console.log("🚀 ~ bb:", bb) // true
console.log("🚀 ~ type of bb:", typeof(bb)); // object


/** Symbol Type */
const sym = Symbol("foo");
console.log("🚀 ~ sym:", sym);
console.log("🚀 ~ type of sym:", typeof(sym));

/** Symbol 비교 */
const sym2 = Symbol("foo");
console.log("🚀 ~ sym2:", sym2);
console.log("🚀 ~ sym == sym2:", sym == sym2); // false

/** Symbol Key 확인하기 */
const sym3 = Symbol.for("foo")
console.log("🚀 ~ key for sym", Symbol.keyFor(sym)) //undefined
console.log("🚀 ~ key for sym3", Symbol.keyFor(sym3)) //undefined

/** undefined & null */
u = undefined;
nu = null;
console.log("🚀 ~ u === nu:", u === nu)
console.log("🚀 ~ type of u:", typeof(u)) //undefined
console.log("🚀 ~ type of nu:", typeof(nu)) //object '비트 패턴인줄 알고 객체로 인식하는 오류'
