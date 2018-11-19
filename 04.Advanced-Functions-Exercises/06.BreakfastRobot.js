let manager = (function solution() {
    let ingredients = new Map();
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    return function(input) {
        let commandTokens = input.split(" ");
        let command = commandTokens[0];
        let quantity;

        function checkRecipe(recipe, recipeIngredients) {
            for (let ingredient of recipeIngredients) {
                if (!ingredients.has(ingredient)
                    || ingredients.get(ingredient) < recipes[recipe][ingredient]) {
                    console.log(`Error: not enough ${ingredient} in stock`);
                    return;
                }
            }
            for (let ingredient of recipeIngredients) {
                ingredients.set(ingredient, ingredients.get(ingredient) - recipes[recipe][ingredient]);
            }
            console.log("Success");
        }

        switch (command) {
            case "restock":
                let microelement = commandTokens[1];
                quantity = +commandTokens[2];
                if (!ingredients.has(microelement)){
                    ingredients.set(microelement, 0);
                }
                ingredients.set(microelement, ingredients.get(microelement) + quantity);
                console.log("Success");
                break;
            case "prepare":
                let recipe = commandTokens[1];
                quantity = +commandTokens[2];
                for (let i = 0; i < quantity; i++) {
                    checkRecipe(recipe, Object.keys(recipes[recipe]));
                }
                break;
            case "report":
                let protein = ingredients.has("protein") ? ingredients.get("protein") : 0;
                let carbohydrate = ingredients.has("carbohydrate") ? ingredients.get("carbohydrate") : 0;
                let fat = ingredients.has("fat") ? ingredients.get("fat") : 0;
                let flavour = ingredients.has("flavour") ? ingredients.get("flavour") : 0;
                console.log(`protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`);
                break;
        }
    }
})();

manager("restock flavour 50"); // Success
manager("prepare coke 4"); // Error: not enough carbohydrate in stock

manager("restock carbohydrate 10"); // Success
manager("restock flavour 10"); // Success
manager("prepare apple 1"); // Success
manager("restock fat 10"); // Success
manager("prepare burger 1"); // Success
manager("report"); // protein=0 carbohydrate=4 fat=3 flavour=5

manager("prepare cheverme 1");
manager("restock protein 10");
manager("prepare cheverme 1");
manager("restock carbohydrate 10");
manager("prepare cheverme 1");
manager("restock fat 10");
manager("prepare cheverme 1");
manager("restock flavour 10");
manager("prepare cheverme 1");
manager("report");
