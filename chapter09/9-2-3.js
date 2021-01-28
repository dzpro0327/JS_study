class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getPerimeter() {
    2 * (this.width + this.height);
  }

  getArea() {
    this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

const square = new Square(10, 20);
console.log(`정사각형의 둘레: ${square.getPerimeter()}`);
console.log(`정사각형의 넓이: ${square.getArea()}`);