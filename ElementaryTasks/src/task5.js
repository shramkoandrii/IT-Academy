function betterMethodCheck (min, max) {
  let counterSimple = 0;
  let counterHard = 0;
  let winner;

  for (let i = min; i <= max; i++) {
    let ticket = i.toString().padStart(6, '0');

    if (luckyTicketSimple(ticket)) {
      counterSimple++;
    }

    if (luckyTicketHard(ticket)) {
      counterHard++;
    }
  }
  counterSimple > counterHard ? winner = 'Простой способ' : winner = 'Сложный способ';

  return `Результат: <br>Простой способ: ${counterSimple},<br> Сложный способ: ${counterHard},<br> Победил: ${winner}`;
}

function luckyTicketSimple (num) {
  let ticket = num.toString().split('');
  let leftSum = sum(ticket.slice(0, 3));
  let rightSum = sum(ticket.slice(3, 6));

  return leftSum == rightSum;
}

function luckyTicketHard (num) {
  let ticket = num.toString().split('');
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < ticket.length; i++) {
    if (parseInt(ticket[i]) % 2 == 0) {
      evenSum += parseInt(ticket[i]);
    } else {
      oddSum += parseInt(ticket[i]);
    }
  }
  
  return oddSum == evenSum;
}

function sum (arr) {
  return arr.reduce((a, b) => parseInt(a) + parseInt(b));
}

function checkLength (input) {
  if (input.value.length > input.maxLength) {
    input.value = input.value.slice(0, input.maxLength);
  }
}

function methodErrorCheck (min, max) {
  let result = '';

  if (!min || !max) {
    result = 'Введите числа';
    return result;
  }

  if (isNaN(min) || isNaN(max)) {
    result = 'Введены неверные параметры';
    return result;
  }

  if (!Number.isInteger(Number(min)) || !Number.isInteger(Number(max))) {
    result = 'Введите целое число';
    return result;
  }

  if (min < 0 || max < 0) {
    result = 'Число меньше нуля';
    return result;
  }

  return result;
}