class PublicTransportTable {
    constructor(town){
        this.changeTownName(town);
        this.addEventListeners();
    }
    changeTownName(value){
        $("caption").text(`${value}'s Public Transport`);
    }
    addVehicle(obj){
        let vehicleInfo = $(`<tr class=\"hide-info\"> <td>${obj.type}</td><td>${obj.name}</td>`);
        let button = $("<button>More Info</button>");
        let extraVehicleInfo = $(`<tr class="more-info"> <td colspan="3"> <table> <tr><td>Route: ${obj.route}</td></tr> <tr><td>Price: ${obj.price}</td></tr> <tr><td>Driver: ${obj.driver}</td></tr> </table> </td> </tr>`);
        button.on("click", function (event) {
            if ($(event.target).text() === "More Info"){
                $(event.target).text("Less Info");
                vehicleInfo.attr("class", "show-info");
                extraVehicleInfo.insertAfter(vehicleInfo);
            } else {
                $(event.target).text("More Info");
                vehicleInfo.attr("class", "hide-info");
                extraVehicleInfo.remove();
            }
        });
        let td = $("<td>");
        td.append(button);
        vehicleInfo.append(td);
        $(".vehicles-info").append(vehicleInfo);
    }

    addEventListeners() {
        let searchBtn = $(".search-btn");

        searchBtn.on("click", function () {
            let typeForm = $("input[name=\"type\"]");
            let nameForm = $("input[name=\"name\"]");
            let type = typeForm.val();
            let name = nameForm.val();
            if (type || name){
                let vehicles = $(".hide-info, .show-info");
                for (let vehicle of vehicles) {
                    if (!vehicle.children[0].innerHTML.includes(type)
                            || !vehicle.children[1].innerHTML.includes(name)) {
                        $(vehicle).css("display", "none");
                        if ($(vehicle).next().attr("class") === "more-info"){
                            $(vehicle).next().remove();
                            $(vehicle).find("button").text("More info");
                            $(vehicle).attr("class", "hide-info");
                        }
                    } else {
                        $(vehicle).css("display", "");
                    }
                }
            }
        });
        
        let clearBtn = $(".clear-btn");
        clearBtn.on("click", function () {
            let typeForm = $("input[name=\"type\"]");
            let nameForm = $("input[name=\"name\"]");
            let type = typeForm.val();
            let name = nameForm.val();
            $(".show-info, .hide-info").css("display", "");
            typeForm.val("");
            nameForm.val("");
        })
    }
}