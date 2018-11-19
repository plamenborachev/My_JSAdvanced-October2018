function validate() {
    let usernameField = $("#username");
    let emailField = $("#email");
    let passwordField = $("#password");
    let confirmPasswordField = $("#confirm-password");
    let companyCheckbox = $("#company");
    let companyNumberField = $("#companyNumber");
    let companyInfoField = $("#companyInfo");
    let submitBtn = $("#submit");

    let isInfoCorrect = true;

    let validDiv = $("#valid");
    let usernamePattern = /^[0-9a-zA-Z]{3,20}$/;
    let emailPattern = /^.*@.*\..*$/;
    let passwordPattern = /^\w{5,15}$/;

    companyCheckbox.on("change", () => {
        if (companyCheckbox.is(":checked")){
            companyInfoField.css("display", "block");
        } else {
            companyInfoField.css("display", "none");
        }
    });

    submitBtn.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!usernamePattern.test(usernameField.val())){
            usernameField.css("border-color", "#ff0000");
            isInfoCorrect = false;
        } else {
            usernameField.css("border", "none");
        }
        if (!emailPattern.test(emailField.val())){
            emailField.css("border-color", "#ff0000");
            isInfoCorrect = false;
        } else {
            emailField.css("border", "none");
        }
        if (!passwordPattern.test(passwordField.val())
                || confirmPasswordField.val().localeCompare(passwordField.val()) !== 0){
            passwordField.css("border-color", "#ff0000");
            confirmPasswordField.css("border-color", "#ff0000");
            isInfoCorrect = false;
        } else {
            passwordField.css("border", "none");
            confirmPasswordField.css("border", "none");
        }
        if (companyCheckbox.is(":checked")){
            if (companyNumberField.val() < 1000 || companyNumberField.val() > 9999){
                companyNumberField.css("border-color", "#ff0000");
                isInfoCorrect = false;
            } else {
                companyNumberField.css("border", "none");
            }
        }
        if (isInfoCorrect){
            validDiv.css("display", "block");
        }
    });
}
