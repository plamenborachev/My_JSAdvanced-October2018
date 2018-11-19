function sortArray(arr, str) {
    let result;

    switch (str) {
        case "asc":
            result = arr.sort((a,b) => a - b);
            break;
        case "desc":
            result = arr.sort((a,b) => b - a);
            break;
    }

    return result;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));