class Shape {
    constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor
    }
}

class Triangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

}

class Circle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Square {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const completedTriangle = new Triangle();
const completedCircle = new Circle();
const completedSquare = new Square();