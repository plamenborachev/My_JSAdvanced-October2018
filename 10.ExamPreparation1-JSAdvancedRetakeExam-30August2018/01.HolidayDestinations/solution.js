function addDestination(){
    let cityField = $(".inputData")[0];
    let city = $(cityField).val();
    let countryField = $(".inputData")[1];
    let country = $(countryField).val();
    if (city && country){
        let season = $("#seasons option:selected").text();
        let newDestination = $(`<tr><td>${city}, ${country}</td><td>${season}</td></tr>`);
        $("#destinationsList").append(newDestination);
        $(cityField).val("");
        $(countryField).val("");
       switch(season){
           case "Summer":
               $("#summer").val(+$("#summer").val() + 1);
               break;
           case "Autumn":
               $("#autumn").val(+$("#autumn").val() + 1);
               break;
           case "Winter":
               $("#winter").val(+$("#winter").val() + 1);
               break;
           case "Spring":
               $("#spring").val(+$("#spring").val() + 1);
               break;
       }
    }
}