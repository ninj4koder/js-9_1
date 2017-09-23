var triangle1Area,
    triangle2Area,
    triangle3Area;

function getTriangleArea(aSide, height) {

  var area = 0;

  if ((aSide == 0) || (height == 0)) {
    return 'Nieprawidłowe dane.';
  } else {
    area = 0.5 * aSide * height;
    return 'Pole trójkąta wynosi: ' + area;
  }
}

console.log(getTriangleArea(4,5));
triangle1Area = getTriangleArea(34,54);
triangle2Area = getTriangleArea(16,2);
triangle3Area = getTriangleArea(34,0);
