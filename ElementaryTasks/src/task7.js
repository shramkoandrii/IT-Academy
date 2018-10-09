function generateFibRange (min, max) {
  let previous = 0;
  let current = 1;
  let items = [];

  while (current <= max) {
    let temporary = current;

    if (current >= min) {
      items.push(current);
    }
    
    current += previous;
    previous = temporary;
  }

  return items;
}

function generateFibLength (context) {
  let previous = 0;
  let current = 1;
  let items = [];

  while (current.toString().length <= context) {
    let temporary = current;

    if (current.toString().length == context) {
      items.push(current);
    }
    
    current += previous;
    previous = temporary;
  }

  return items;
}

let inputLength = document.getElementById('fibonacci-length');
let inputMax = document.getElementById('fibonacci-max');
let inputMin = document.getElementById('fibonacci-min');

function disableInputLength () {
  if (inputLength.value !== '' || inputLength.value.length > 0) {
    inputMin.disabled = true;
    inputMax.disabled = true;
  } else {
    inputMin.disabled = false;
    inputMax.disabled = false;
  }
}

function disableInputRange () {
  if (inputMax.value.length > 0 || inputMin.value.length > 0) {
    inputLength.disabled = true;
  } else {
    inputLength.disabled = false;
  }
}

function fibonacciErrorCheck (length, min, max) {
  let result = '';

  if(length) {
    if (!Number.isInteger(length)) {
      result = 'Введите целое число';
      return result;
    }
  }

  if (min || max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      result = 'Введите целое число';
      return result;
    }
  }

  if (length < 0 || min < 1 || max < 0) {
    result = 'Введенное число меньше 1';
    return result;
  }

  if (min > max) {
    result = 'Минимальный диапазон больше максимального';
    return result;
  }
  
  return result;
}