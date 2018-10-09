describe('Task 7', function() {
  // TASK 7
  describe('Ряд Фибоначчи для диапазона', function() {
    it('Числа Фибоначчи от 1 до 5000 равны 1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181', function() {
      let result = '1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181';
      assert.equal(generateFibRange(1,5000), result);
    });
    it('Числа Фибоначчи длинной 5 символом равны 10946,17711,28657,46368,75025', function() {
      let result = '10946,17711,28657,46368,75025';
      assert.equal(generateFibLength(5), result);
    });
  });
  // ERROR
  describe('Валидация', function() {
    let options = [
      {
        input: [15.5],
        result: 'Введите целое число'
      },
      {
        input: ['', 1.5, 170],
        result: 'Введите целое число'
      },
      {
        input: [-10],
        result: 'Введенное число меньше 1'
      },
      {
        input: ['', 250, 100],
        result: 'Минимальный диапазон больше максимального'
      }
    ];
    for (let i = 0; i < options.length; i++) {
      it(`Введя "${options[i].input}" получили ошибку: "${options[i].result}"`, function(){
        let result = fibonacciErrorCheck(options[i].input[0], options[i].input[1], options[i].input[2]);
        assert.equal(result, options[i].result);
      });
    }
  });
});