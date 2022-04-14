// Interface segregation principle
class Animal {
    constructor(name) {
        this.name = name
    }
}
class swimmer {
    swim() {
        console.log(`${this.name} can swims`)
    }
}
class walker {
    walk(){
        console.log(`${this.name} can walks`)
    }
}
class flier {
    fly() {
        console.log(`${this.name} can flies`)
    }
}

class Dog extends Animal{}
class Woodpecker extends Animal{}
class Whale extends Animal{}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Woodpecker.prototype, walker, flier)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Pluto')
dog.swim()
dog.walk()

const woodpecker = new Woodpecker('woody')
woodpecker.walk()
woodpecker.fly()

const whale = new Whale('willy')
whale.swim()