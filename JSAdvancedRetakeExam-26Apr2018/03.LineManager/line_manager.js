class LineManager {
    constructor(arrOfStops) {
        this.stops = arrOfStops;
        this.currentStop = this.stops[0];
        this.duration = 0;
        this.currentDelay = 0;
        this.stopsCovered = 0;
    }

    get stopsCovered() {
        return this._stopsCovered;
    }

    set stopsCovered(value) {
        this._stopsCovered = value;
    }

    get stops() {
        return this._stops;
    }

    set stops(value) {
        // if (!Array.isArray(value)) {
        //     throw new TypeError("Invalid input")
        // }
        for (let stop of value) {
            if (typeof stop.name !== "string" || typeof stop.timeToNext !== "number"
                    || stop.name === "" || stop.timeToNext < 0) {
                throw new TypeError("Invalid Stop");
            }
        }
        this._stops = value;
    }

    get atDepot() {
        return this.currentStop === this.stops[this.stops.length - 1];
    }

    get nextStopName() {
        if (this.atDepot) {
            return "At depot."
        }
        return this.stops[this.stops.indexOf(this.currentStop) + 1].name;
    }

    get currentDelay() {
        return this._currentDelay;
    }


    set currentDelay(value) {
        this._currentDelay = value;
    }

    arriveAtStop(minutes) {
        if (minutes < 0) {
            throw new TypeError("Minutes cannot be negative")
        }
        if (this.atDepot) {
            throw new TypeError("Last stop reached")
        }
        this.duration += minutes;
        // if (minutes > this.currentStop.timeToNext) {
        this.currentDelay += minutes - this.currentStop.timeToNext;
        // }
        this.currentStop = this.stops[this.stops.indexOf(this.currentStop) + 1];
        this.stopsCovered++;
        return !this.atDepot;
    }

    toString() {
        let result = "Line summary\n";
        if (!this.atDepot) {
            result += `- Next stop: ${this.nextStopName}\n`;
        } else {
            result += "- Course completed\n";
        }
        result += `- Stops covered: ${this.stopsCovered}\n- Time on course: ${this.duration} minutes\n- Delay: ${this.currentDelay} minutes`;
        return result;
    }
}

// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},]);

// Travel through all the stops until the bus is at depot
while (man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}
console.log(man.toString());

// Should throw an Error (minutes cannot be negative)
// man.arriveAtStop(-4);
// Should throw an Error (last stop reached)
// man.arriveAtStop(4);

// Should throw an Error at initialization
// const wrong = new LineManager([ { name: 'Stop', timeToNext: { wrong: 'Should be a number'} } ]);