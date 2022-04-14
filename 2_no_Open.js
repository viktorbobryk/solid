// not Open close principle

class Square {
    constructor(size) {
        this.type = 'square'
        this.size = size
    }
}

class Circle {
    constructor(radius) {
        this.type = 'circle'
        this.radius = radius
    }
}

class Rect {
    constructor(width, height) {
        this.type = 'rect'
        this.width = width
        this.height = height
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }
    sum() {
        return this.shapes.reduce((acc, shape) => {
            if (shape.type === 'circle') {
                acc += (shape.radius ** 2) * Math.PI
            }else if(shape.type === 'square') {
                acc += shape.size ** 2
            }
            else if(shape.type === 'rect'){
                acc += shape.width * shape.height
            }
            return acc
        }, 0)
    }
}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(2),
    new Rect(5, 5)
])

console.log(calc.sum())