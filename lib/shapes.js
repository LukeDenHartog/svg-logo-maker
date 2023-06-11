class Shape {
    constructor(logoColor) {
      this.logoColor = logoColor;
    }
  }
  
  class Triangle extends Shape {
    constructor(logoColor) {
      super(logoColor);
    }
  
    render() {
      return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.logoColor}"> </polygon>`;
    }
  }
  
  class Circle extends Shape {
    constructor(logoColor) {
      super(logoColor);
    }
  
    render() {
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.logoColor}"></circle>`;
    }
  }
  
  class Square extends Shape {
    constructor(logoColor) {
      super(logoColor); 
    }
  
    render() {
      return `<rect x="50" height="200" width="200" fill="${this.logoColor}"></rect>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };

  
  