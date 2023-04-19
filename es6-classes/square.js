/* eslint-disable no-undef -- Shape is imported by .html */
class Square extends Shape {
  constructor(width) {
    const area = width * width;
    const perimeter = 4 * width;
    super(area, perimeter);
    this.width = width;
  }

  describe() {
    return super.describe() + ', Width: ' + this.width;
  }
}

const exampleSquare = new Square(10);

console.log(exampleSquare.describe());
