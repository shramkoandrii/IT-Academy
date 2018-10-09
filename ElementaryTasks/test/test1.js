describe('Task 1', function() {
  // TASK 1
  describe('Шахматная доска', function() {
    it('Ввели 15,5,@', function() {
      let result = '@ @ @ @ @ @ @ @\n @ @ @ @ @ @ @ \n@ @ @ @ @ @ @ @\n @ @ @ @ @ @ @ \n@ @ @ @ @ @ @ @\n';
      assert.equal(drawBoard(15, 5, '@'), result);
    });
    it('Тип result === String', function() {
      let result = drawBoard(15, 5, '@');
      assert.equal(typeof result, 'string');
    });
  });
  // ERROR
  describe('Валидация', function() {
    let options = [
      {
        input: [-10, 5, '@'],
        result: 'Число меньше нуля'
      },
      {
        input: [15, 8],
        result: 'Введите все аргументы'
      },
      {
        input: [13.7, 8.2, '#'],
        result: 'Введите целое число'
      },
      {
        input: ['$', 'two', 23],
        result: 'Введены неверные параметры'
      }
    ];
    for (let i = 0; i < options.length; i++) {
      it(`Введя "${options[i].input}" получили ошибку: "${options[i].result}"`, function(){
        let result = boardErrorCheck(options[i].input[0], options[i].input[1], options[i].input[2]);
        assert.equal(result, options[i].result);
      });
    }
  })
});