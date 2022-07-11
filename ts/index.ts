// создать класс Transport у него должны быть методы
// ride(from, to, distance)
// refillFuel(amount) // заправка топливом
// setCargo(amount) // погрузить товары
// были поля
// cargo: number
// fuel: number
// speed: number
// type: string

// создать класс AirTransport 
// у которого speed = 1000
// собственное поле govId: number // номер борта
// максимальный груз static maxCargo = 1000
// дальность полета static destinationLength = 10000

// создать класс GroundTransport 
// у которого speed = 150
// собственное поле parkingNo: number
// static maxCargo = 30000 
// дальность eзды static destinationLength = 1500


abstract class Transport {
    abstract speed: number;
    abstract type: string;
    abstract fuel: number;
    constructor (public cargo: number) {}
    ride(from: string, to: string, distance: number) {
        console.log(`${this.type} направляется из ${from} в ${to} на дистанцию ${distance}`)
    }

    refilFuel(amount: number) {
        console.log()
    }

    setCargo(amount: number) {
        console.log()
    }
}


class AirTransport extends Transport {
    public type: 'airTransport';
    public speed = 1000;
    public fuel: 100;
    static maxCargo: number = 1000;
    static destinationLength: number = 10000;
    constructor (public govId: number) {
        super()
    }
}

const airPlane = new AirTransport(23);

class GroundTransport extends Transport {
    public type: 'groundTransport';
    public speed = 150;
    public fuel: 100;
    static maxCargo: number = 30000;
    static destinationLength: number = 1500;
    constructor (public parkingNo: number) {
        super()
    }
}

const train = new GroundTransport(212)