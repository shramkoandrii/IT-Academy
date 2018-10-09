describe('Task 6', function() {
  // TASK 6
  describe('Числовая последовательность', function() {
    it('10 символов квадрат которых больше 12 равен 4, 5, 6, 7, 8, 9, 10, 11, 12, 13', function() {
      let result = '4, 5, 6, 7, 8, 9, 10, 11, 12, 13';
      assert.equal(order(10,12), result);
    });
  });
  // ERROR
  describe('Валидация', function() {
    let options = [
      {
        input: [10],
        result: 'Введите все аргументы'
      },
      {
        input: [15.5, 17.1],
        result: 'Введите целое число'
      },
      {
        input: [-10, 50],
        result: 'Число меньше нуля'
      }
    ];
    for (let i = 0; i < options.length; i++) {
      it(`Введя "${options[i].input}" получили ошибку: "${options[i].result}"`, function(){
        let result = orderErrorCheck(options[i].input[0], options[i].input[1]);
        assert.equal(result, options[i].result);
      });
    }
  });
});