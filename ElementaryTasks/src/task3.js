function sortTriangles (triangles) {
  let groupArray = sliceArrayIntoGroups(triangles, 4);
  let sortedTriangles = [];

  sortedTriangles = groupArray.sort (function (first, second) {
    let firstArea = calculateTriangleArea(first.a, first.b, first.c),
      secondArea = calculateTriangleArea(second.a, second.b, second.c);

    return firstArea - secondArea;
  });

  return sortedTriangles.map(function (element) {
    return element.vertices;
  });
}

function calculateTriangleArea (sidea, sideb, sidec) {
  let a = parseFloat(sidea);
  let b = parseFloat(sideb);
  let c = parseFloat(sidec);
  let p = (a + b + c) / 2;

  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

function sliceArrayIntoGroups (arr, size) {
  let items = [];
  Array.prototype.slice.call(arr);
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].value === undefined){
      items.push(arr[i])
    } else {
      items.push(arr[i].value)
    }
  }
  let step = 0;
  let sliceArr = [];
  let len = items.length;
  while (step < len) {
    sliceArr.push(items.slice(step, step += size));
  }
  var objs = sliceArr.map(function(item) { 
    return { 
      vertices: item[0], 
      a: item[1],
      b: item[2],
      c: item[3] 
    }; 
  });
  return objs;
}

function createNewElement () {
  let trianglesList = document.getElementById('triangles-list');

  let row = document.createElement('div');
  row.classList.add('row');
  trianglesList.appendChild(row);

  let triangleName = document.createElement('div');
  triangleName.classList.add('form-group', 'col-sm-2', 'mb-2');
  row.appendChild(triangleName);

  let inputName = document.createElement('input');
  inputName.setAttribute("type", "text");
  inputName.classList.add('form-control', 'mt-2', 'mb-2', 'triangles-name');
  inputName.setAttribute("placeholder", "Введите название");
  triangleName.appendChild(inputName);

  let trianglesSides = ['a', 'b', 'c'];
  for (let i = 0; i < trianglesSides.length; i++) {
    let triangleSide = document.createElement('div');
    triangleSide.classList.add('form-group', 'col-sm-1', 'mb-2');
    row.appendChild(triangleSide);

    let inputSide = document.createElement('input');
    inputSide.setAttribute("type", "number");
    inputSide.classList.add('form-control', 'mt-2', 'mb-2', `triangles-${trianglesSides[i]}`);
    inputSide.setAttribute("placeholder", trianglesSides[i]);
    triangleSide.appendChild(inputSide);
  }
  let div = document.createElement('div');
  div.classList.add('mt-2');
  row.appendChild(div);

  let removeButton = document.createElement('input');
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("value", "Удалить");
  removeButton.classList.add('btn', 'btn-danger', 'triangles-remove');
  div.appendChild(removeButton);

  let items = document.querySelectorAll('.row .triangles-remove');
  for (let i = 0; i < items.length; i++) {
    items[i].onclick = removeElement;
  }
}

function removeElement () {
  let button = this.parentNode;
  let triangleRow = button.parentNode;
  let container = triangleRow.parentNode;
  container.removeChild(triangleRow);
}

function triangleError (arr) {
  let result = '';
  let items = [];
  Array.prototype.slice.call(arr);
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].value === undefined){
      items.push(arr[i])
    } else {
      items.push(arr[i].value)
    }
  }
  let groupeditems = sliceArrayIntoGroups(items, 4);
  groupeditems.forEach(function(item){
    let a = parseFloat(item.a);
    let b = parseFloat(item.b);
    let c = parseFloat(item.c);
    if (item.a === '' || item.b === '' || item.c === '') {
      return result = 'Введите все аргументы';
    }
    if (item.a < 0 || item.b < 0 || item.c < 0) {
      return result = 'Число меньше нуля либо равно нулю';
    }
    if (!((a > 0) && (b > 0) && (c > 0) && (a + b > c) && (a + c > b) && (b + c > a))) {
      return result = 'Невозможно создать треугольник с заданными сторонами';
    }
  });
  return result;
}