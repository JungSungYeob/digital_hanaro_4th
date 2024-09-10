const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };

function getValueExceptInitial(k) {
    const { [k]: val } = user; //symbol 가져오는 방법임
    console.log("🚀 ~ getValueExceptInitial ~ val:", val)

    const [, ...ret] = val; //문자열 첫글자 제외하고 ret으로 저장
    return ret.join('') // join
}

console.log(getValueExceptInitial("name")); //ong
console.log(getValueExceptInitial("passwd")); //ong
console.log(getValueExceptInitial("addr")); //ong
