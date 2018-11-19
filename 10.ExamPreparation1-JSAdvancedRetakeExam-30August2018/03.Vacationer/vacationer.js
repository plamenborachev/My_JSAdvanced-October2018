function solve() {
    class Vacationer {
        constructor(fullName, creditCard = [1111, "", 111]){
            this.fullName = fullName;
            this.idNumber = this.generateIDNumber();
            this.creditCard = creditCard;
            this.wishList = [];
        }

        get fullName() {
            return this._fullName;
        }

        set fullName(value) {
            if (!value){
                throw new TypeError("Object must have fullName");
            }
            if (value.length !== 3){
                throw new TypeError("Name must include first name, middle name and last name");
            }
            let namePattern = /^[A-Z][a-z]+$/;
            let firstName = value[0];
            let middleName = value[1];
            let lastName = value[2];
            if (!namePattern.test(firstName)
                || !namePattern.test(middleName)
                || !namePattern.test(lastName)) {
                throw new TypeError("Invalid full name");
            }
            this._fullName = {firstName, middleName, lastName};
        }

        get creditCard() {
            return this._creditCard;
        }

        set creditCard(value) {
            if (value.length < 3){
                throw new TypeError("Missing credit card information");
            }
            let cardNumber = value[0];
            let expirationDate = value[1];
            let securityNumber = value[2];
            if (typeof cardNumber !== "number" || typeof securityNumber !== "number"){
                throw new TypeError("Invalid credit card details");
            }
            this._creditCard = {cardNumber, expirationDate, securityNumber};
        }

        // get idNumber() {
        //     return this._idNumber;
        // }
        generateIDNumber(){
            let id = 231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length;
            if (["a", "e", "o", "i", "u"]
                .includes(this.fullName.lastName.charAt(this.fullName.lastName.length - 1))){
                id += "8";
            } else {
                id += "7";
            }
            return id;
        }

        // set idNumber(value) {
        //     this._idNumber = this.generateIDNumber();
        // }

        addCreditCardInfo(input){
            this.creditCard = input;
        }

        addDestinationToWishList(destination){
            if (this.wishList.includes(destination)){
                throw new TypeError("Destination already exists in wishlist");
            }
            this.wishList.push(destination);
            this.wishList.sort((a,b) => a.length - b.length);
        }

        getVacationerInfo(){
            let wishList = "";
            if (this.wishList.length === 0){
                wishList = "empty";
            } else {
                wishList = this.wishList.join(", ");
            }
            return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n${wishList}\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`
        }
    }

    // Initialize vacationers with 2 and 3 parameters
    let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
    // console.log(vacationer1);
    // console.log(vacationer1.fullName.lastName);
    // console.log(vacationer1.idNumber);

    let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]);
    // console.log(vacationer2);
    // console.log(vacationer2.fullName.lastName);
    // console.log(vacationer2.idNumber);

    // Should throw an error (Invalid credit card details)
    // try {
    //     let vacationer3 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], ["123456789", "10/01/2018", 777]);
    // } catch (err) {
    //     console.log("Error: " + err.message);
    // }

    // Should throw an error (Invalid full name)
    try {
        let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
    } catch (err) {
        console.log("Error: " + err.message);
    }

    // Should throw an error
    // try {
    //     let vacationer3 = new Vacationer();
    // } catch (err) {
    //     console.log("Error: " + err.message);
    // }

    // Should throw an error (Missing credit card information)
    try {
        let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
        vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
    } catch (err) {
        console.log("Error: " + err.message);
    }

    // Should throw an error (Invalid credit card details)
    // try {
    //     let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    //     vacationer3.addCreditCardInfo([123456789, "20/10/2018", "9876543221"]);
    // } catch (err) {
    //     console.log("Error: " + err.message);
    // }

    // let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    // console.log(vacationer3);
    // vacationer3.addCreditCardInfo([123456789, "20/10/2018", 9876543221]);
    // console.log(vacationer3);

    vacationer1.addDestinationToWishList('Spain');
    vacationer1.addDestinationToWishList('Germany');
    vacationer1.addDestinationToWishList('Bali');
    // console.log(vacationer1.wishList);

    // Return information about the vacationers
    console.log(vacationer1.getVacationerInfo());
    console.log(vacationer2.getVacationerInfo());
}

solve();
