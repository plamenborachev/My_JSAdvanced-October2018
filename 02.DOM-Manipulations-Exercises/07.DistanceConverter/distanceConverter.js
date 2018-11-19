function attachEventsListeners() {
    document.getElementById("convert").addEventListener("click", convert);

    function convert() {
        let inputUnit = document.getElementById("inputUnits").value;
        let outputUnit = document.getElementById("outputUnits").value;
        let inputValue = +document.getElementById("inputDistance").value;


        let m = 0;

        switch (inputUnit) {
            case "km":
                m = inputValue * 1000;
                break;
            case "m":
                m = inputValue;
                break;
            case "cm":
                m = inputValue * 0.01;
                break;
            case "mm":
                m = inputValue * 0.001;
                break;
            case "mi":
                m = inputValue * 1609.34;
                break;
            case "yrd":
                m = inputValue * 0.9144;
                break;
            case "ft":
                m = inputValue * 0.3048;
                break;
            case "in":
                m = inputValue * 0.0254;
                break;
        }

        switch (outputUnit) {
            case "km":
                document.getElementById("outputDistance").value = m / 1000;
                break;
            case "m":
                document.getElementById("outputDistance").value = m;
                break;
            case "cm":
                document.getElementById("outputDistance").value = m / 0.01;
                break;
            case "mm":
                document.getElementById("outputDistance").value = m / 0.001;
                break;
            case "mi":
                document.getElementById("outputDistance").value = m / 1609.34;
                break;
            case "yrd":
                document.getElementById("outputDistance").value = m / 0.9144;
                break;
            case "ft":
                document.getElementById("outputDistance").value = m / 0.3048;
                break;
            case "in":
                document.getElementById("outputDistance").value = m / 0.0254;
                break;
        }
    }
}