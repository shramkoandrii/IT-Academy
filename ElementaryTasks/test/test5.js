describe('Task 5', function() {
  // TASK 5
  describe('Счастливые билеты', function() {
    it('Количество счастливых билетов посчитанных простым способ равно 55251, сложным способом 25080, победил: Простой способ', function() {
      let result = `Результат: <br>Простой способ: 55251,<br> Сложный способ: 25080,<br> Победил: Простой способ`;
      assert.equal(betterMethodCheck(1,999999), result);
    });
    it('Билет 636555 счастливый', function() {
      let result = true;
      assert.equal(luckyTicketSimple(636555), result);
    });
    it('Билет 458129 несчастливый', function() {
      let result = false;
      assert.equal(luckyTicketSimple(458129), result);
    });
    it('Билет 150222 счастливый', function() {
      let result = true;
      assert.equal(luckyTicketHard(150222), result);
    });
    it('Билет 130588 несчастливый', function() {
      let result = false;
      assert.equal(luckyTicketHard(130588), result);
    });
    it('Сумма элементов 2,4,1,5,1,9 равна 22', function() {
      let result = 22;
      assert.equal(sum([2,4,1,5,1,9]), result);
    }); 
  });
  // ERROR
  describe('Валидация', function() {
    let options = [
      {
        input: [151565],
        result: 'Введите числа'
      },
      {
        input: ['one', 515155],
        result: 'Введены неверные параметры'
      },
      {
        input: [151.489, 486357],
        result: 'Введите целое число'
      },
      {
        input: [-289784, 777777],
        result: 'Число меньше нуля'
      }
    ];
    for (let i = 0; i < options.length; i++) {
      it(`Введя "${options[i].input}" получили ошибку: "${options[i].result}"`, function(){
        let result = methodErrorCheck(options[i].input[0], options[i].input[1]);
        assert.equal(result, options[i].result);
      });
    }
  });
});