function acceptance() {
    let companyInput = $("input[name=\"shippingCompany\"]");
    let productInput = $("input[name=\"productName\"]");
    let quantityInput = $("input[name=\"productQuantity\"]");
    let scrapeInput = $("input[name=\"productScrape\"]");

    if (companyInput.val() && productInput.val && quantityInput.val() && scrapeInput.val()){
        if (typeof +quantityInput.val() === "number"
            && typeof +scrapeInput.val() === "number"
            && quantityInput.val() - scrapeInput.val() > 0){
            let div = $("<div>");
            let p = $(`<p>[${companyInput.val()}] ${productInput.val()} - ${quantityInput.val() - scrapeInput.val()} pieces</p>`);
            let button = $("<button type='button'>Out of stock</button>");
            button.on("click", function () {
                div.remove();
            });
            div.append(p).append(button);
            $("#warehouse").append(div);

            companyInput.val("");
            productInput.val("");
            quantityInput.val("");
            scrapeInput.val("");
        }
    }
}