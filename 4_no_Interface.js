// not Interface segregation principle

class AutoSet {
    getTeslaSet(){
        console.log('name: Tesla fuel: electricity')
    };
    getBMWSet(){
        console.log('name: BMW fuel: petrol')
    };
    getAudiSet(){
        console.log('name: Audi fuel: diesel')
    };
}

class Audi extends AutoSet {
    getTeslaSet() {
        console.log('')
    }
    getBMWSet() {
        console.log('')
    }
}

const AudiA4 = new Audi()
AudiA4.getAudiSet()
AudiA4.getBMWSet()
AudiA4.getTeslaSet()

//===========================================

class Tesla extends AutoSet {
    getAudiSet() {
        console.log('')
    }
    getBMWSet() {
        console.log('')
    }
}

const TeslaModelS = new Tesla()
TeslaModelS.getAudiSet()
TeslaModelS.getBMWSet()
TeslaModelS.getTeslaSet()

//===========================================

class BMW extends AutoSet {
    getAudiSet() {
        console.log('')
    }
    getTeslaSet() {
        console.log('')
    }
}

const BMW_M3 = new BMW()
BMW_M3.getAudiSet()
BMW_M3.getBMWSet()
BMW_M3.getTeslaSet()