describe('Task 2', function() {
  // TASK 2
  describe('Анализ конвертов', function() {
    it('Первый конверт со сторонами 15 и 5, Второй конверт со сторонами 8 и 4', function() {
      let result = 'Конверт 1';
      assert.equal(isEnclose(15,5,8,4), result);
    });
    it('Первый конверт со сторонами 13 и 10, Второй конверт со сторонами 25 и 15', function() {
      let result = 'Конверт 2';
      assert.equal(isEnclose(13,10,25,15), result);
    });
    it('Первый конверт со сторонами 10 и 9, Второй конверт со сторонами 12 и 8', function() {
      let result = 0;
      assert.equal(isEnclose(10,9,12,8), result);
    });
  });
  // ERROR
  describe('Валидация', function() {
    let options = [
      {
        input: [15, 5, 11],
        result: 'Введите все стороны'
      },
      {
        input: [15, '@', 26, 'five'],
        result: 'Введены неверные параметры'
      },
      {
        input: [20, 10, -30, 15],
        result: 'Число меньше нуля'
      }
    ];
    for (let i = 0; i < options.length; i++) {
      it(`Введя "${options[i].input}" получили ошибку: "${options[i].result}"`, function(){
        let result = encloseErrorCheck(options[i].input[0], options[i].input[1], options[i].input[2], options[i].input[3]);
        assert.equal(result, options[i].result);
      });
    }
  });
});