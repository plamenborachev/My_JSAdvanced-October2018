class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    get room() {
        return this._room;
    }

    set room(value) {
        if (value !== "livingRoom" && value !== "bedRoom" && value !== "closet") {
            throw new Error(`Cannot have book shelf in ${value}`);
        }
        this._room = value;
    }

    addBook(bookName, bookAuthor, genre) {
        let newBook = {bookName, bookAuthor, genre};
        if (this.shelf.length === this.shelfCapacity) {
            this.shelf.shift();
        }
        this.shelf.push(newBook);
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName) {
        let bookToDelete = this.shelf.filter(b => b.bookName === bookName)[0];
        this.shelf.splice(this.shelf.indexOf(bookToDelete), 1);
    }

    showBooks(genre) {
        let result = "";
        let booksByGenre = this.shelf.filter(b => b.genre === genre);
        if (booksByGenre.length > 0) {
            result += `Results for search \"${genre}\":\n`;
            for (let book of booksByGenre) {
                result += `\uD83D\uDCD6 ${book.bookAuthor} - \"${book.bookName}\"\n`;
            }
        }
        return result.trim();
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    toString() {
        if (this.shelf.length === 0) {
            return "It's an empty shelf";
        }
        let result = `\"${this.shelfGenre}\" shelf in ${this.room} contains:\n`;
        for (let book of this.shelf) {
            result += `\uD83D\uDCD6 \"${book.bookName}\" - ${book.bookAuthor}\n`;
        }
        return result.trim();
    }
}

// let garden = new BookCollection("Programming", "garden");

// let livingRoom = new BookCollection("Programming", "livingRoom", 5)
//     .addBook("Introduction to Programming with C#", "Svetlin Nakov")
//     .addBook("Introduction to Programming with Java", "Svetlin Nakov")
//     .addBook("Programming for .NET Framework", "Svetlin Nakov");
// console.log(livingRoom.shelf);
// livingRoom.throwAwayBook("Introduction to Programming with C#");
// console.log(livingRoom.shelf);

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
console.log(bedRoom.showBooks("history"));
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
// console.log(bedRoom.toString());
console.log(bedRoom.showBooks("history"));

// let livingRoom = new BookCollection("Programming", "livingRoom", 5)
//     .addBook("Introduction to Programming with C#", "Svetlin Nakov")
//     .addBook("Introduction to Programming with Java", "Svetlin Nakov")
//     .addBook("Programming for .NET Framework", "Svetlin Nakov");
// console.log(livingRoom.toString());