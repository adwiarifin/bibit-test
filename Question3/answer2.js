function findFirstStringInBracket(str) {
    const regex = /\(([^)]+)\)/;
    const match = str.match(regex);
    return match ? match[1] : '';
}

const str = 'Hello (World) of (Nothing)';
const result = findFirstStringInBracket(str);
console.log(result);