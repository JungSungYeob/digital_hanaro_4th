const songs = ["One More Time", "I AM", "Cry"];
const songs2 = Array("One More Time", "I AM", "Cry");
const songs3 = Array<string>("One More Time", "I AM", "Cry");

songs.forEach((song, index) => {
    console.log(`${song} is at index ${index}`);
});

songs2.forEach((song, index) => {
    console.log(`${song} is at index ${index}`);
});

songs3.forEach((song, index) => {
    console.log(`${song} is at index ${index}`);
});