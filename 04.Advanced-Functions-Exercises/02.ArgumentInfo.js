function argumentInfo() {
    let types = new Map();
    for (let argument of arguments) {
        let argumentType = typeof argument;
        console.log(typeof argument + ": " + argument);

        if (!types.has(argumentType)) {
            types.set(argumentType, 0);
        }
        types.set(argumentType, types.get(argumentType) + 1);
    }
    let sortedTypes = new Map([...types.entries()]
        .sort((a, b) => b[1] - a[1]));

    for (let [type, count] of sortedTypes) {
        if (count > 0) {
            console.log(`${type} = ${count}`);
        }
    }
}

argumentInfo('cat', 42, function () {
    console.log('Hello world!');
});
argumentInfo({name: 'bob'}, 3.333, 9.999);
argumentInfo(42, 'cat', [], undefined);