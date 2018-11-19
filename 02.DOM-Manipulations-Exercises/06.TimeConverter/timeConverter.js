function attachEventsListeners() {
    let buttons = document.getElementsByTagName("input");

    for (let i = 1; i < buttons.length; i += 2) {
        buttons[i].addEventListener("click", convert);
    }

    function convert() {
        if (this === document.getElementById("daysBtn")) {
            let days = +document.getElementById("days").value;
            document.getElementById("hours").value = days * 24;
            document.getElementById("minutes").value = days * 24 * 60;
            document.getElementById("seconds").value = days * 24 * 60 * 60;
        } else if (this === document.getElementById("hoursBtn")){
            let hours = +document.getElementById("hours").value;
            document.getElementById("days").value = hours / 24;
            document.getElementById("minutes").value = hours * 60;
            document.getElementById("seconds").value = hours * 60 * 60;
        } else if (this === document.getElementById("minutesBtn")){
            let minutes = +document.getElementById("minutes").value;
            document.getElementById("days").value = minutes / 60 / 24;
            document.getElementById("hours").value = minutes / 60;
            document.getElementById("seconds").value = minutes * 60;
        } else if (this === document.getElementById("secondsBtn")){
            let seconds = +document.getElementById("seconds").value;
            document.getElementById("days").value = seconds / 60 / 60 / 24;
            document.getElementById("hours").value = seconds / 60 / 60;
            document.getElementById("minutes").value = seconds / 60;
        }
    }
}