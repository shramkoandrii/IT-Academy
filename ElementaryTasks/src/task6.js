function order (length, square) {
  let arr = [];
  let num = 1;
  
  while (arr.length < length) {
    if (num * num >= square) {
      arr.push(num);
    }
    num++;
  }
  
  return arr.join(', ');
}

function orderErrorCheck (length, square) {
  let result = '';

  if (!length || !square) {
    result = 'Введите все аргументы';
    return result;
  }

  if (!Number.isInteger(parseFloat(length)) || !Number.isInteger(parseFloat(square))) {
    result = 'Введите целое число';
    return result;
  }

  if (parseInt(length) < 0 || parseInt(square) < 0) {
    result = 'Число меньше нуля';
    return result;
  }
  
  return result;
}