// TASK1
function task1() {
  let length = document.getElementById('chess-board-length').value;
  let height = document.getElementById('chess-board-height').value;
  let symbol = document.getElementById('chess-board-symbol').value;
  let answer = document.getElementById('chess-board-answer');
  let error = boardErrorCheck(length, height, symbol);

  if (error !== '') {
    answer.innerHTML = error;
    return error;
  }
  answer.innerHTML = drawBoard(length, height, symbol);
}
document.getElementById('chess-board').addEventListener('click', task1);
// TASK2
function task2() {
  let envelope1SideA = document.getElementById('side-a').value;
  let envelope1SideB = document.getElementById('side-b').value;
  let envelope2SideC = document.getElementById('side-c').value;
  let envelope2SideD = document.getElementById('side-d').value;
  let answer = document.getElementById('envelope-answer');
  let error = encloseErrorCheck(envelope1SideA, envelope1SideB, envelope2SideC, envelope2SideD);

  if (error !== '') {
    answer.innerHTML = error;
    return error;
  }
  answer.innerHTML = `Результат: ${isEnclose(envelope1SideA, envelope1SideB, envelope2SideC, envelope2SideD)}`;
}
document.getElementById('envelope').addEventListener('click', task2);
// TASK3
function task3() {
  let answer = document.getElementById('triangles-answer');
  let inputs = document.querySelectorAll('#triangles-list .row .form-group input');
  let error = triangleError(inputs);

  if (error !== '') {
    answer.innerHTML = error;
    return error;
  }
  answer.innerHTML = `Результат: ${sortTriangles(inputs)}`;
}
document.getElementById('triangles').addEventListener('click', task3);
document.getElementById('triangles-new').addEventListener('click', createNewElement);
// TASK4
function task4() {
  let number = document.getElementById('palindrome-input').value;
  let answer = document.getElementById('palindrome-answer');
  let error = palindromeErrorCheck(number);

  if (error !== '') {
    answer.innerHTML = error;
    return error;
  }
  answer.innerHTML = `Результат: ${palindrome(number)}`;
}
document.getElementById('palindrome').addEventListener('click', task4);
// TASK5
function task5() {
  let answer = document.getElementById('lucky-number-answer');
  let min = document.getElementById('lucky-number-min').value;
  let max = document.getElementById('lucky-number-max').value;

  let error = methodErrorCheck(min, max);
  if (error !== '') {
    answer.innerHTML = error;
    return error;
  }
  answer.innerHTML = betterMethodCheck(min, max);
}
document.getElementById('lucky-number-min').addEventListener('input', (e) => checkLength(e.target));
document.getElementById('lucky-number-max').addEventListener('input', (e) => checkLength(e.target));
document.getElementById('lucky-ticket').addEventListener('click', task5);
// TASK6
function task6() {
  let length = document.getElementById('order-input-length').value;
  let square = document.getElementById('order-input-square').value;
  let answer = document.getElementById('order-answer');
  let error = orderErrorCheck(length, square);
  
  if (error !== '') {
    answer.innerHTML = error;
    return error;
  }
  answer.innerHTML = `Результат: ${order(length, square)}`;
}
document.getElementById('order').addEventListener('click', task6);
// TASK7
function task7() {
  let length = parseFloat(document.getElementById('fibonacci-length').value);
  let min = parseFloat(document.getElementById('fibonacci-min').value);
  let max = parseFloat(document.getElementById('fibonacci-max').value);
  let answer = document.getElementById('fibonacci-answer');
  let error = fibonacciErrorCheck(length, min, max);
  if (error !== '') {
    answer.innerHTML = error;
    return error;
  }
  if (length) {
    answer.innerHTML = generateFibLength(length);
    return answer;
  }
  if (min && max) {
    answer.innerHTML = generateFibRange(min, max);;
    return answer;
  }
}
document.getElementById('fibonacci-length').addEventListener('input', disableInputLength);
document.getElementById('fibonacci-min').addEventListener('input', disableInputRange);
document.getElementById('fibonacci-max').addEventListener('input', disableInputRange);
document.getElementById('fibonacci').addEventListener('click', task7);