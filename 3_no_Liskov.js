// not Liskov substitution principle
class Person {
    access() {
        console.log('access allowed')
    }
}

class Frontend extends Person {
    canCreateUI(){}
}
class Backend  extends Person{
    canCreateDB(){}
}
class Competitor extends Person{
    access() {
        console.log('access not allowed')
    }
}

function openSecureDoor(person) {
    person.access()
}

openSecureDoor(new Frontend())
openSecureDoor(new Backend())
openSecureDoor(new Competitor())