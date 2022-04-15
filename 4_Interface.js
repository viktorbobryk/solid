// Interface segregation principle


class AudiSet {
    getAudiSet(){
        console.log('name: Audi fuel: diesel')
    };
}

class TeslaSet {
    getTeslaSet(){
        console.log('name: Tesla fuel: electricity')
    };
}

class BMWSet {
    getBMWSet(){
        console.log('name: BMW fuel: petrol')
    };
}

class Audi extends AudiSet {

}

const AudiA4 = new Audi()
AudiA4.getAudiSet()


//===========================================

class Tesla extends TeslaSet {

}

const TeslaModelS = new Tesla()

TeslaModelS.getTeslaSet()

//===========================================

class BMW extends BMWSet {

}

const BMW_M3 = new BMW()

BMW_M3.getBMWSet()
