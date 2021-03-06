//Liskov substitution principle
class Person {
    access() {
        console.log('access allowed')
    }
}

class Staff extends Person {
    access() {
        console.log('access allowed')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Staff {
    canCreateUI(){}
}
class Backend  extends Staff{
    canCreateDB(){}
}
class Competitor extends Guest{
    canStealOurCompanySecrets(){}

    access() {
        console.log('access not allowed')
    }
}

function openSecureDoor(staff) {
    staff.access()
}

openSecureDoor(new Frontend())
openSecureDoor(new Backend())
openSecureDoor(new Competitor())