/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return 'Area: ' + this.area + ', Perimeter: ' + this.perimeter;
  }
}

const exampleShape = new Shape(100, 50);

console.log(exampleShape.describe());
