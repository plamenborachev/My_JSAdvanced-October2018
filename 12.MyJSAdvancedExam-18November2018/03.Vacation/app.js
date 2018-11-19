class Vacation {
    constructor(organizer, destination, budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget){
        if (this.budget > budget){
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }
        for (let kid of this.kids[grade]) {
            let kidName = kid.split("-")[0];
            if (kidName === name){
                return `${name} is already in the list for this ${this.destination} vacation.`
            }
        }
        this.kids[grade].push(`${name}-${budget}`);
        return this.kids[grade];
    }

    removeChild(name, grade){
        let currentKid;
        if (this.kids.hasOwnProperty(grade)) {
            for (let kid of this.kids[grade]) {
                let kidName = kid.split("-")[0];
                if (kidName === name){
                    currentKid = kid;
                }
            }
        }
        if (!currentKid){
            return `We couldn't find ${name} in ${grade} grade.`;
        }
        this.kids[grade].splice(this.kids[grade].indexOf(currentKid), 1);
        return this.kids[grade];
    }

    toString(){
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        let unorderedKids = this.kids;
        let orderedKids = {};
        Object.keys(unorderedKids).sort().forEach(function(key) {
            orderedKids[key] = unorderedKids[key];
        });
        let output = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
        for (let grade of Object.keys(orderedKids)) {
            output += `Grade: ${grade}\n`;
            let counter = 1;
            for (let kid of orderedKids[grade]) {
                output += `${counter++}. ${kid}\n`;
            }
        }
        return output;
    }

    get numberOfChildren(){
        let kidsCount = 0;
        for (let grade of Object.keys(this.kids)) {
            for (let kid of this.kids[grade]) {
                kidsCount++;
            }
        }
        return kidsCount;
    }
}

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));
console.log(vacation.toString());


// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('pesho', 5, 2000));
// vacation.registerChild('Lilly', 6, 2100);
//
// console.log(vacation.removeChild('Gosho', 5));
//
// vacation.registerChild('Pesho', 6, 2400);
// vacation.registerChild('Gosho', 5, 2000);
//
// console.log(vacation.removeChild('Lilly', 6));
// console.log(vacation.registerChild('Tanya', 5, 6000));


// let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
// vacation.registerChild('Gosho', 5, 3000);
// vacation.registerChild('Lilly', 6, 1500);
// vacation.registerChild('Pesho', 7, 4000);
// vacation.registerChild('Tanya', 5, 5000);
// vacation.registerChild('Mitko', 10, 5500);
// console.log(vacation.toString());

// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.numberOfChildren);
