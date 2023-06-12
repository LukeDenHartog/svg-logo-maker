{/* Follow this example
 <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

  <circle cx="150" cy="100" r="80" fill="green"/> </circle>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */
}
class Shape {
    constructor(logoColor, textColor, logoText, shape) {
      this.logoColor = logoColor;
      this.textColor = textColor;
      this.logoText = logoText;
      this.shape = shape;
    }
    render() {
      return ``
    }
  }
  
  class Triangle extends Shape {
    constructor(logoColor, textColor, logoText, shape) {
      super(logoColor, textColor, logoText, shape);
    }
  
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><${this.shape} height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.logoColor}"></${this.shape}><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
    }
  }
 

  class Circle extends Shape {
    constructor(logoColor, textColor, logoText, shape) {
      super(logoColor, textColor, logoText, shape);
    }

    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><${this.shape} cx="50%" cy="50%" r="100" fill="${this.logoColor}"></${this.shape}><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
    }
  }

  class Square extends Shape {
    constructor(logoColor, textColor, logoText, shape) {
      super(logoColor, textColor, logoText, shape); 
    }
  
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><${this.shape} x="50" height="200" width="200" fill="${this.logoColor}"></${this.shape}><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text></svg>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  