/** 형변환(Type Conversion/Casting) */

/** toString */
n = 123;
console.log("🚀 ~ n:", n)
console.log("🚀 ~ n.toString():", n.toString()) //문자열
console.log("🚀 ~ n.toString(2):", n.toString(2)) // 2진수 문자열
console.log("🚀 ~ n.toString(8):", n.toString(8)) // 8진수 문자열
console.log("🚀 ~ n.toString(36):", n.toString(36)) //16진수 문자열


/** parseInt */
str = '1234';
console.log("🚀 ~ parseInt(str):", parseInt(str))

/** Boolean */
const x = 5;
console.log("🚀 ~ x & !!x:", x, !!x)


/** Operator */
const sss = 'sss'
console.log("🚀 ~ 'sss' + 2 :", sss + 2);
console.log("🚀 ~ 'sss' + {id:1} :", sss + {id:1});
console.log("🚀 ~ x + '30':", x + '30')
console.log("🚀 ~ x + +'30':", x + +'30')
console.log("🚀 ~ x * '30':", x * '30')
