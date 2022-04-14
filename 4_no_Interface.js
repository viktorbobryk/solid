// not Interface segregation principle
 class Animal {
     constructor(name) {
         this.name = name
     }
     walk(){
         console.log(`${this.name} can walks`)
     }
     swim(){
         console.log(`${this.name} can swims`)
     }
     fly(){
         console.log(`${this.name} can flies`)
     }
 }
 class Dog extends Animal{
    fly() {
        return null
    }
 }
class Woodpecker extends Animal{
    swim() {
        return null
    }
}
class Whale extends Animal{
    walk() {
        return null
    }
    fly() {
        return null
    }
}
const dog = new Dog('Pluto')
dog.swim()
dog.walk()
dog.fly()

const woodrecker = new Woodpecker('woody')
woodrecker.swim()
woodrecker.walk()
woodrecker.fly()

const whale = new Whale('willy')
whale.swim()
whale.walk()
whale.fly()