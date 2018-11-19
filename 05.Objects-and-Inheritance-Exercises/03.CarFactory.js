function carFactory(carWantedObj) {
    let engines = {
        smallEngine: {
            power: 90,
            volume: 1800
        },
        normalEngine: {
            power: 120,
            volume: 2400
        },
        monsterEngine: {
            power: 200,
            volume: 3500
        }
    };
    let carriages = {
        hatchback: {
            type: 'hatchback',
            color: ""
        },
        coupe: {
            type: 'coupe',
            color: ""
        }
    };
    let newCar = {
        model: carWantedObj.model,
        engine: {},
        carriage: {},
        wheels: []
    };
    for (let engine of Object.values(engines)) {
        if (engine.power >= carWantedObj.power){
            newCar.engine = engine;
            break;
        }
    }
    newCar.carriage = Object.values(carriages).filter(c => c.type === carWantedObj.carriage)[0];
    newCar.carriage.color = carWantedObj.color;

    let wheelSize = carWantedObj.wheelsize % 2 === 1 ? carWantedObj.wheelsize : carWantedObj.wheelsize - 1;
    for (let i = 0; i < 4; i++) {
        newCar.wheels.push(wheelSize);
    }
    return newCar;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));