function checkEmpty(str) {
    if (str.length > 0) {
        return checkOpeningBracket(str);
    }
    return '';
}

function checkOpeningBracket(str) {
    let index = str.indexOf("(");
    if (index >= 0) {
        const wordsAfterFirstBracket = str.substr(index + 1);
        return checkClosingBracket(wordsAfterFirstBracket);
    }
    return '';
}

function checkClosingBracket(str) {
    let index = str.indexOf(")");
    if (index >= 0) {
        return str.substring(0, index);
    }
    return '';
}

function findFirstStringInBracket(str) {
    return checkEmpty(str);
}

const str = 'Hello (World) of (Nothing)';
const result = findFirstStringInBracket(str);
console.log(result);