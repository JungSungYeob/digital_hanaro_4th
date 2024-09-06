//현재 날짜
const today = new Date();
const weekNum = today.getDay();
const WEEK_NAME = "일월화수목금토"

console.log(`오늘은 ${WEEK_NAME[weekNum]}요일 입니다.`)