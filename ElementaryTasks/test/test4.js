describe('Task 4', function() {
  // TASK 4
  describe('Палиндром', function() {
    it('Палиндром из числа 1234437 равен 3443', function() {
      let result = 3443;
      assert.equal(palindrome(1234437), result);
    });
    it('Функция перевернет 12345 в 54321', function() {
      let result = 54321;
      assert.equal(reverse(12345), result);
    });
  });
  // ERROR
  describe('Валидация', function() {
    let options = [
      {
        input: '',
        result: 'Введите число'
      },
      {
        input: 'what?',
        result: 'Введены неверные параметры'
      },
      {
        input: -25885,
        result: 'Число меньше нуля'
      }
    ];
    for (let i = 0; i < options.length; i++) {
      it(`Введя "${options[i].input}" получили ошибку: "${options[i].result}"`, function(){
        let result = palindromeErrorCheck(options[i].input);
        assert.equal(result, options[i].result);
      });
    }
  });
});