/** Object Type : Instance, function, Array, RegExp, Set/WeakSet, Map/WeakMap, Date ... */
/** primitive를 제외한 모든 것이 객체 */

/** 빈 객체 선언 */
const o1 = new Object();
console.log("🚀 ~ o1:", o1);
console.log("🚀 ~ type of o1:", typeof o1);
const o2 = {};
console.log("🚀 ~ o2:", o2);
console.log("🚀 ~ type of o2:", typeof o2);
const o3 = Object.create({});
console.log("🚀 ~ o3:", o3);
console.log("🚀 ~ type of o3:", typeof o3);

/** properties를 가지는 객체 */
const user = {
  id: 1,
  name: "hong",
  get: function (obj) {
    return `${obj.id}:${obj.name}`;
  },
  getInfo() {
    return `${this.id}:${this.name}`;
  },
};
