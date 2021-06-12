const indexWord = (word) => {
    // count occurence each character
    const x = {};
    for (let i = 0; i < word.length; i++) {
        const c = word[i];
        if (x[c]) {
            x[c]++
        } else {
            x[c] = 1;
        }
    }

    // build index
    const sortedKeys = Object.keys(x).sort();
    let result = '';
    for (let i = 0; i < sortedKeys.length; i++) {
        result += `${sortedKeys[i]}${x[sortedKeys[i]]}`;
    }

    return result;
}

const main = (arr) => {
    const map = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const word = indexWord(element);
        map[i] = word;
    }
    console.log(arr, map);
};

const input = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
const answer = main(input);
// console.log(answer);