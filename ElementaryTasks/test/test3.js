describe('Task 3', function() {
  // TASK 1
  describe('Сортировка треугольников', function() {
    it('Первый треугольник - abc,13,2,14, Второй треугольник - bca,5,2,5, Третий треугольник - cba,3,8,10 отсортируются в bca, cba, abc', function() {
      let result = ['bca', 'cba', 'abc'];
      assert.deepEqual(sortTriangles(['abc','13','2','14','bca','5','2','5','cba','3','8','10']), result);
    });
    it('Разбить массив на группу', function() {
      assert.deepEqual(sliceArrayIntoGroups(['abc','13','2','14','bca','5','2','5','cba','3','8','10'],4),[{'vertices':'abc','a':'13','b':'2','c':'14'}, {'vertices':'bca','a':'5','b':'2','c':'5'}, {'vertices':'cba','a':'3','b':'8','c':'10'}]);
    });
  });
  // ERROR
  describe('Валидация', function() {
    let options = [
      {
        input: ['abc','13','2','14','bca','5','',''],
        result: 'Введите все аргументы'
      },
      {
        input: ['abc','13','2','14','bca','0','-1','1'],
        result: 'Число меньше нуля либо равно нулю'
      },
      {
        input: ['abc','13','2','14','bca','5','1','1'],
        result: 'Невозможно создать треугольник с заданными сторонами'
      }
    ];
    for (let i = 0; i < options.length; i++) {
      it(`Введя "${options[i].input}" получили ошибку: "${options[i].result}"`, function(){
        let result = triangleError(options[i].input);
        console.log(result)
        assert.equal(result, options[i].result);
      });
    }
  });
});
