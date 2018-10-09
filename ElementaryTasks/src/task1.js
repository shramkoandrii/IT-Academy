function drawBoard (length, height, symbol) {
  let board = '';

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < length; j++) {
      if ((i + j) % 2 === 0) {
        board += symbol;
      } else {
        board += ' ';
      }
    }
    board += '\n';
  }
  
  return board;
}

function boardErrorCheck (length, height, symbol) {
  let result = '';

  if (!length || !height || !symbol) {
    result = 'Введите все аргументы';
    return result;
  }

  if (isNaN(length) || isNaN(height) ||  typeof symbol !== 'string') {
    result = 'Введены неверные параметры';
    return result;
  }

  if (length < 0 || height < 0) {
    result = 'Число меньше нуля';
    return result;
  }

  if (!Number.isInteger(parseFloat(length)) || !Number.isInteger(parseFloat(height))) {
    result = 'Введите целое число';
    return result;
  }
  
  return result;
}