function solve() {
    class Melon{
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this.elementIndex = this.weight * this.melonSort.length;
            this.element = "";
        }
        get weight() {
            return this._weight;
        }
        set weight(value) {
            this._weight = value;
        }
        get melonSort() {
            return this._melonSort;
        }
        set melonSort(value) {
            this._melonSort = value;
        }
        get elementIndex(){
            return this._elementIndex;
        }
        set elementIndex(value){
            this._elementIndex = value;
        }
        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Watermelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Water";
        }
    }
    class Firemelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Fire";
        }
    }
    class Earthmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Earth";
        }
    }
    class Airmelon extends Melon{
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Air";
        }
    }
    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elements = ["Fire", "Earth", "Air", "Water"];
            this.element = "Water";
        }
        get elements() {
            return this._elements;
        }
        set elements(value) {
            this._elements = value;
        }
        morph() {
            this.element = this.elements.shift();
            this.elements.push(this.element);
            return this;
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon ,Melolemonmelon};

    // let test = new Melon(100, "Test");

    // let watermelon = new Watermelon(12.5, "Kingsize");
    // console.log(watermelon.toString());

    // let melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
    // console.log(melolemonmelon.toString());
    // melolemonmelon.morph();
    // console.log(melolemonmelon.toString());
    // melolemonmelon.morph();
    // console.log(melolemonmelon.toString());
    // melolemonmelon.morph();
    // console.log(melolemonmelon.toString());
}

solve();