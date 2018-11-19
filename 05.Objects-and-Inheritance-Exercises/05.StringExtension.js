(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (this.valueOf().indexOf(str) !== 0) {
            return str + this.valueOf();
        }
        return this.valueOf();
    };
    String.prototype.ensureEnd = function (str) {
        if (this.valueOf().indexOf(str) !== this.valueOf().length - str.length) {
            return this.valueOf() + str;
        }
        return this.toString();
    };
    String.prototype.isEmpty = function () {
        return this.valueOf() === "";
    };
    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return ".".repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if (lastIndex !== -1) {
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n - 3) + "...";
            }
        }
    };
    String.format = function () {
        let str = arguments[0];
        let placeholderPattern = /{(\d+)}/gm;
        let placeholders;
        while ((placeholders = placeholderPattern.exec(str)) !== null) {
            if (arguments[+placeholders[1] + 1]) {
                str = str.replace(placeholders[0], arguments[+placeholders[1] + 1]);
            }
        }
        return str;
    };
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.ensureEnd("string");
console.log(str);

console.log(str = str.truncate(16));
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);

// console.log(str = String.format('The {0} {1} fox', 'quick', 'brown'));
// console.log(str = String.format('jumps {0} {1}', 'dog'));