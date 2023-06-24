const MAX_LENGTH = 20;

function checkLength(str, maxLength) {
  return str.length <= maxLength;
}

function isPalindrome(str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';

  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }

  return normalizedStr === reversedStr;
}

 function extractNumber(str) {
  let numStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (!isNaN(char)) {
      numStr += char;
    }
  }
  if (numStr === '') {
    return NaN;
  } else {
    return parseInt(numStr);
  }
} 

const inputString = 'Лёша на полке клопа нашёл ';
const inputNumericString = 'ECMAScript 2022';

console.log('is it polindrome? ' + isPalindrome(inputString));
console.log('Given str <= '+ MAX_LENGTH + ' characters? ' + checkLength(inputString));
console.log ('Numbers:'+ extractNumber(inputString))
