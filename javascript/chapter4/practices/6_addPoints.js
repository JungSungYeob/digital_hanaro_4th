/** 방법1 */
function addPoints(a, b) {
    lenA = a.toString().length - Math.trunc(a).toString().length - 1;
    lenB = b.toString().length - Math.trunc(b).toString().length - 1;

    console.log((a + b).toFixed(Math.max(lenA, lenB)));
}

addPoints(0.21354, 0.1);
addPoints(0.14, 0.28);
addPoints(0.34, 0.226);
addPoints(10.34, 200.226);
addPoints(0.413, -10.28);
