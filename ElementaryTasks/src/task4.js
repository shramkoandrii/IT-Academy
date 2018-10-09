function palindrome (number) {
  let string = number.toString();
  let palindrome = '';

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      const subStr = string.substring(i, j);

      if (subStr === reverse(subStr) && (subStr.length > palindrome.length)) {
        palindrome = subStr;
      }
    }
  }
  
  return palindrome;
}

function reverse (word) {
  return word.toString().split('').reverse().join('');
}

function palindromeErrorCheck(num) {
  let result = '';

  if (!num) {
    result = 'Введите число';
    return result;
  }

  if (isNaN(num)) {
    result = 'Введены неверные параметры';
    return result;
  }

  if (num < 0) {
    result = 'Число меньше нуля';
    return result;
  }

  return result;
}