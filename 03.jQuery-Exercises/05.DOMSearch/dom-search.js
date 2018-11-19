function domSearch(selector, boolean) {
    let container = $(selector);
    container.addClass("items-control");
    let addDiv = $("<div class='add-controls'>" +
        "<label>Enter text: " +
        "<input id='text-input'>" +
        "</label>" +
        "</div>");
    let addBtn = $("<a id='addButton' class='button' style='display: inline-block'>Add</a>");
    addDiv.append(addBtn);
    container.append(addDiv);

    let searchDiv = $("<div class='search-controls'>" +
        "<label>Search:" +
        "<input id='search'>" +
        "</label>" +
        "</div>");
    container.append(searchDiv);
    $("#search").on("keyup", function () {
        $(".list-item").css("display", "none");
        if (boolean){
            let searchText = $("#search").val();
            $(`li:contains(${searchText})`).css("display", "block");
        } else {
            let searchText = $("#search").val().toLowerCase();
            let items = $(".list-item strong").toArray();
            for (let item of items) {
                let current = $(item);
                if (current.text().toLowerCase().indexOf(searchText) > -1){
                    current.parent().css("display", "block");
                }
            }
        }
    });

    let resultDiv = $("<div class='result-controls'>" +
        "<ul class='items-list'>" +
        "</ul>" +
        "</div>");
    container.append(resultDiv);

    $("#addButton").on("click", function (e) {
        e.preventDefault();
        let element = $("#text-input");
        let deleteBtn = $("<a class='button'>X</a>");
        let li = $("<li class='list-item'>" +
            `<strong>${element.val()}</strong>` +
            "</li>");
        deleteBtn.on("click", function (e) {
            e.preventDefault();
            li.remove();
        });
        li.prepend(deleteBtn);
        $(".items-list").append(li);
        element.val("");
    });
}