function personalBMI() {
    let [name, age, weight, height] = arguments;
    let bmi = Math.round(weight / Math.pow(height / 100, 2));
    let status;
    if (bmi < 18.5){
        status = "underweight";
    } else if (bmi < 25){
        status = "normal";
    } else if (bmi < 30){
        status = "overweight";
    } else {
        status = "obese";
    }
    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height :height
        },
        BMI: bmi,
        status: status
    };
    if (status === "obese") {
        patient["recommendation"] = "admission required";
    }
    return patient;
}

console.log(personalBMI("Peter", 29, 75, 182));
console.log(personalBMI("Honey Boo Boo", 9, 57, 137));