function realEstateAgency () {
    let apartmentRentInput = $("input[name=\"apartmentRent\"]");
    let apartmentTypeInput = $("input[name=\"apartmentType\"]");
    let agencyCommissionInput = $("input[name=\"agencyCommission\"]");
    let regOfferBtn = $("button[name=\"regOffer\"]");

    function registerOffer() {
        if (typeof +apartmentRentInput.val() === "number"
            && typeof +agencyCommissionInput.val() === "number"
            && +apartmentRentInput.val() > 0
            && +agencyCommissionInput.val() >= 0
            && +agencyCommissionInput.val() <= 100
            && apartmentTypeInput.val() !== ""
            && !apartmentTypeInput.val().includes(":")){
            let div = $("<div class='apartment'>");
            let pRent = $(`<p>Rent: ${apartmentRentInput.val()}</p>`);
            let pType = $(`<p>Type: ${apartmentTypeInput.val()}</p>`);
            let pCommission = $(`<p>Commission: ${agencyCommissionInput.val()}</p>`);

            div.append(pRent).append(pType).append(pCommission);
            $("#building").append(div);

            $("#message").text("Your offer was created successfully.");

        } else {
            $("#message").text("Your offer registration went wrong, try again.");
        }
        apartmentRentInput.val("");
        apartmentTypeInput.val("");
        agencyCommissionInput.val("");
    }
    regOfferBtn.on("click", registerOffer);

    let familyBudgetInput = $("input[name=\"familyBudget\"]");
    let familyApartmentTypeInput = $("input[name=\"familyApartmentType\"]");
    let familyNameInput = $("input[name=\"familyName\"]");
    let findOfferBtn = $("button[name=\"findOffer\"]");
    let agencyProfitElement = $("#roof h1");
    let agencyProfit = +agencyProfitElement.text().split(" ")[2];

    function findOffer() {
        if (+familyBudgetInput.val() > 0
            && familyApartmentTypeInput.val()
            && familyNameInput.val()){
            let apartments = $(".apartment");
            for (let apartment of apartments) {
                if($(apartment).find("p").eq(1).text().split(": ")[1]
                    === familyApartmentTypeInput.val()){
                    let rent = +$(apartment).find("p").eq(0).text().split(": ")[1];
                    let commission = +$(apartment).find("p").eq(2).text().split(": ")[1];
                    let budgetNeeded = rent + (rent * (commission / 100));
                    if (budgetNeeded <= +familyBudgetInput.val()){
                        $(apartment).css("border", "2px solid red");
                        $(apartment).empty();
                        let p1 = $(`<p>${familyNameInput.val()}</p>`);
                        let p2 = $("<p>live here now</p>");
                        let moveOutBtn = $("<button>MoveOut</button>");
                        $(apartment).append(p1).append(p2).append(moveOutBtn);

                        agencyProfit += 2 * (rent * (commission / 100));
                        agencyProfitElement.text(`Agency profit: ${agencyProfit} lv.`);

                        $("#message").text("Enjoy your new home! :))");

                        function moveOut() {
                            let familyName = $(this).parent().find("p").eq(0).text();
                            $(this).parent().remove();
                            $("#message").text(`They had found cockroaches in ${familyName}'s apartment`);
                        }
                        moveOutBtn.on("click", moveOut);
                        // break;
                    } else {
                        $("#message").text("We were unable to find you a home, so sorry :(");
                    }
                } else {
                    $("#message").text("We were unable to find you a home, so sorry :(");
                }
            }
        } else {
            $("#message").text("We were unable to find you a home, so sorry :(");
        }
        familyBudgetInput.val("");
        familyApartmentTypeInput.val("");
        familyNameInput.val("");
    }

    findOfferBtn.on("click", findOffer);
}