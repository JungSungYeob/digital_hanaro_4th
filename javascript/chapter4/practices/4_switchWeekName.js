//현재 날짜
const today = new Date();
const weekNum = today.getDay();

switch (weekNum) {
    case 0:
        console.log(`오늘은 일요일 입니다.`);
        break;
    case 1:
        console.log(`오늘은 월요일 입니다.`);
        break;
    case 2:
        console.log(`오늘은 화요일 입니다.`);
        break;
    case 3:
        console.log(`오늘은 수요일 입니다.`);
        break;
    case 4:
        console.log(`오늘은 목요일 입니다.`);
        break;
    case 5:
        console.log(`오늘은 금요일 입니다.`);
        break;
    case 6:
        console.log(`오늘은 토요일 입니다.`);
        break;
}
