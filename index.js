// Code your solutions in this file
const countDown = (num) => {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}
function writeCards(array, string) {
    const newAra = []
    for (let a = 0; a < array.length; a++) newAra.push(`Thank you, ${array[a]}, for the wonderful ${string} gift!`);
    return newAra
}



