function makeReservation(selector) {
    let submitBtn = $("#submit");
    let editBtn = $("#edit");
    let continueBtn = $("#continue");

    function submitInfo() {
        let fullNameField = $("#fullName");
        let fullName = fullNameField.val();
        let emailField = $("#email");
        let email = emailField.val();
        let phoneNumberField = $("#phoneNumber");
        let phoneNumber = phoneNumberField.val();
        let addressField = $("#address");
        let address = addressField.val();
        let postalCodeField = $("#postalCode");
        let postalCode = postalCodeField.val();

        let fullNameLi = $(`<li>Name: ${fullName}</li>`);
        let emailLi = $(`<li>E-mail: ${email}</li>`);
        let phoneNumberLi = $(`<li>Phone: ${phoneNumber}</li>`);
        let addressLi = $(`<li>Address: ${address}</li>`);
        let postalCodeLi = $(`<li>Postal Code: ${postalCode}</li>`);
        
        if (fullName && email) {
            $("#infoPreview").append(fullNameLi)
            .append(emailLi)
            .append(phoneNumberLi)
            .append(addressLi)
            .append(postalCodeLi);

            fullNameField.val("");
            emailField.val("");
            phoneNumberField.val("");
            addressField.val("");
            postalCodeField.val("");

            submitBtn.attr("disabled", true);
            editBtn.attr("disabled", false);
            continueBtn.attr("disabled", false);
        }
    }
    submitBtn.on("click", submitInfo);

    function editInfo() {
        let liElements = $("#infoPreview li");
        let inputFields = $("#fullName, #email, #phoneNumber, #address, #postalCode");
        for (let i = 0; i < liElements.length; i++) {
            $(inputFields[i]).val($(liElements[i]).text().split(": ")[1]);
        }
        $("#infoPreview").empty();
        submitBtn.attr("disabled", false);
        editBtn.attr("disabled", true);
        continueBtn.attr("disabled", true);
    }
    editBtn.on("click", editInfo);

    function payment() {
        submitBtn.attr("disabled", true);
        editBtn.attr("disabled", true);
        continueBtn.attr("disabled", true);

        let paymentMethodsElement = $("<h2>Payment details</h2><select id='paymentOptions' class='custom-select'><option selected disabled hidden>Choose</option><option value='creditCard'>Credit Card</option><option value='bankTransfer'>Bank Transfer</option></select><div id='extraDetails'></div>");

        $(selector).append(paymentMethodsElement);
        $("#paymentOptions").on("change", showExtraDetails);
    }
    continueBtn.on("click", payment);

    function showExtraDetails() {
        let selected = $("#paymentOptions").find(":selected").val();
        $("#extraDetails").empty();
        let paymentInfoDiv;

        if (selected === "creditCard"){
            paymentInfoDiv = $("<div class=\"inputLabel\">Card Number<input></div><br><div class=\"inputLabel\">Expiration Date<input></div><br><div class=\"inputLabel\">Security Numbers<input></div><br><button id=\"checkOut\">Check Out</button></div>");
        } else if (selected === "bankTransfer"){
            paymentInfoDiv = $("<p>" +
                "You have 48 hours to transfer the amount to:" +
                "<br>" +
                "IBAN: GR96 0810 0010 0000 0123 4567 890" +
                "</p>" +
                "<button id=\"checkOut\">Check Out</button>" +
                "</div>");
        }
        $("#extraDetails").append(paymentInfoDiv);

        $("#checkOut").on("click", addFinalMessage);
    }

    function addFinalMessage() {
        let finalMessage = $("<h4>Thank you for your reservation!</h4>");
        $("#wrapper").empty().append(finalMessage);
    }
}