const { Circle, Triangle, Square } = require('./shapes');

describe('Triangle', () => {

    it('should check if the class object will be rendered by using the render method and comparing it to the code I have', () => {
        const triangle = new Triangle("blue", "red", "AWS", "polygon")
        expect(triangle.logoColor).toEqual('blue')
        expect(triangle.textColor).toEqual('red')
        expect(triangle.logoText).toEqual('AWS')
        expect(triangle.shape).toEqual('polygon')
        expect(triangle.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="blue"></polygon><text x="150" y="160" font-size="60" text-anchor="middle" fill="red">AWS</text></svg>')
    })
})

describe('Circle', () => {

    it('should check if the class object will be rendered by using the render method and comparing it to the code I have', () => {
        const circle = new Circle("blue", "red", "AWS", "circle")
        expect(circle.logoColor).toEqual('blue')
        expect(circle.textColor).toEqual('red')
        expect(circle.logoText).toEqual('AWS')
        expect(circle.shape).toEqual('circle')
        expect(circle.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="50%" cy="50%" r="100" fill="blue"></circle><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">AWS</text></svg>')
    })
})

describe('Square', () => {

    it('should check if the class object will be rendered correctly by using the render method and comparing it to the code I have', () => {
        const square = new Square("blue", "red", "AWS", "rect")
        expect(square.logoColor).toEqual('blue')
        expect(square.textColor).toEqual('red')
        expect(square.logoText).toEqual('AWS')
        expect(square.shape).toEqual('rect')
        expect(square.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="50" height="200" width="200" fill="blue"></rect><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">AWS</text></svg>')
    })
})