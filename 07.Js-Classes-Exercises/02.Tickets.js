function solve(arr, sortCriteria) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    for (let arrElement of arr) {
        let ticketTokens = arrElement.split("|");
        let destination = ticketTokens[0];
        let price = +ticketTokens[1];
        let status = ticketTokens[2];
        let currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket);
    }
    return tickets.sort((a, b) => a[sortCriteria] > b[sortCriteria]);
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));