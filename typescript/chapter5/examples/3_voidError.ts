type VoidReturn = () =>void;
const test2:VoidReturn = () =>11; //ok
// test2().toString(); //error


function songLog (song:string):void{
    // return true; //return 에러
}

let songLogger : (song:string) => void;

songLogger = (song) =>{
    return true; //ok
}

const songLegger2 : (song:string) => void = (song:string) => {
    return true; //ok
} 