function isEnclose (a, b, c, d) {
  let envelope1SideA = parseFloat(a);
  let envelope1SideB = parseFloat(b);
  let envelope2SideC = parseFloat(c);
  let envelope2SideD = parseFloat(d);

  if (envelope1SideA > envelope2SideC && envelope1SideB > envelope2SideD ||
      envelope1SideA > envelope2SideD && envelope1SideB > envelope2SideC) {
    return 'Конверт 1';
  }

  if (envelope2SideC > envelope1SideA && envelope2SideD > envelope1SideB ||
      envelope2SideD > envelope1SideA && envelope2SideC > envelope1SideB) {
    return 'Конверт 2';
  } 

  return 0;
}

function encloseErrorCheck (a, b, c, d) {
  let result = '';

  if (!a || !b || !c || !d) {
    result = 'Введите все стороны';
    return result;
  }

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    result = 'Введены неверные параметры';
    return result;
  }

  if (a < 0 || b < 0 || c < 0 || d < 0) {
    result = 'Число меньше нуля';
    return result;
  }

  return result;
}