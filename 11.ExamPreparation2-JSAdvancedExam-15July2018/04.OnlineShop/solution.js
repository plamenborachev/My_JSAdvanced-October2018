function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
<div class="block">
<label class="field">Product details:</label>
<br>
<input placeholder="Enter product" class="custom-select">
<input class="input1" id="price" type="number" min="1" max="999999" value="1">
<label class="text">BGN</label>
<input class="input1" id="quantity" type="number" min="1" value="1">
<label class="text">Qty.</label>
<button id="submit" class="button" disabled>Submit</button>
<br>
<br>
<label class="field">Inventory:</label>
<br>
<ul class="display">

</ul>
<br>
<label class="field">Capacity:</label>
<input id="capacity" readonly>
<label class="field">(maximum capacity is 150 items.)</label>
<br>
<label class="field">Price:</label>
<input id="sum" readonly>
<label class="field">BGN</label>
</div>`;
    $(selector).html(form);

    let productInput = $(".custom-select");
    let priceInput = $("#price");
    let quantityInput = $("#quantity");
    let submitBtn = $("#submit");
    let capacityField = $("#capacity");
    let priceField = $("#sum");

    productInput.on("keypress", function () {
        submitBtn.prop("disabled", false);
    });

    submitBtn.on("click", function () {
        let li = $(`<li>Product: ${productInput.val()} Price: ${priceInput.val()} Quantity: ${quantityInput.val()}</li>`);
        if (+capacityField.val() + +quantityInput.val() <= 150){
            $(".display").append(li);
            capacityField.val(+capacityField.val() + +quantityInput.val());
            priceField.val(+priceField.val() + +priceInput.val());

            productInput.val("");
            priceInput.val(1);
            quantityInput.val(1);

            if (+capacityField.val() === 150){
                capacityField.addClass("fullCapacity");
                capacityField.val("full");

                productInput.prop("disabled", true);
                priceInput.prop("disabled", true);
                quantityInput.prop("disabled", true);
            }
            submitBtn.prop("disabled", true);
        }
    })
}