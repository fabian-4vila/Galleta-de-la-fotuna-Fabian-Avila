const getRandomElemArray = (arr) => {
    let lastIndex = -1
    let indexRandom;
    do {
        indexRandom = Math.floor(Math.random() * arr.length);
    } while (indexRandom === lastIndex);

    lastIndex = indexRandom;
    return arr[indexRandom];
};
export default getRandomElemArray;
