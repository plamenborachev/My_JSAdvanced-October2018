function calendar(input) {
    let d = new Date(+input[2], +input[1] - 1, +input[0]);
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    let monthName = "";

    switch (month) {
        case 0:
            monthName = "January";
            break;
        case 1:
            monthName = "February";
            break;
        case 2:
            monthName = "March";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "May";
            break;
        case 5:
            monthName = "June";
            break;
        case 6:
            monthName = "July";
            break;
        case 7:
            monthName = "August";
            break;
        case 8:
            monthName = "September";
            break;
        case 9:
            monthName = "October";
            break;
        case 10:
            monthName = "November";
            break;
        case 11:
            monthName = "December";
            break;
    }

    let container = $("#content");

    container.append($(`<table><caption>${monthName} ${year}</caption></table>`));
    let tbody = $("<tbody></tbody>");
    tbody.append($("<tr>" +
        "<th>Mon</th>" +
        "<th>Tue</th>" +
        "<th>Wed</th>" +
        "<th>Thu</th>" +
        "<th>Fri</th>" +
        "<th>Sat</th>" +
        "<th>Sun</th>" +
        "</tr>"));


    let firstDayOfMonth = new Date(+input[2], +input[1] - 1, 1).getDay();

    let emptyCellsAtBeginning = 0;
    if (firstDayOfMonth === 0) {
        emptyCellsAtBeginning += 6;
    } else {
        emptyCellsAtBeginning += firstDayOfMonth - 1;
    }

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    let numberOfDaysInMonth = daysInMonth(month + 1, year);

    let emptyCellsAtEnd = 0;
    if ((emptyCellsAtBeginning + numberOfDaysInMonth) % 7 !== 0){
        emptyCellsAtEnd = 7 - (emptyCellsAtBeginning + numberOfDaysInMonth) % 7;
    }

    let totalCells = emptyCellsAtBeginning + numberOfDaysInMonth + emptyCellsAtEnd;
    let weeks = totalCells / 7;
    let daysCounter = 1;

    for (let week = 1; week <= weeks; week++) {
        let weekRow = $("<tr></tr>");
        for (let day = 1; day <= 7; day++) {
            if (week === 1 && day <= emptyCellsAtBeginning){
                weekRow.append($("<td></td>"));
            } else {
                if (daysCounter <= numberOfDaysInMonth){
                    if (daysCounter === date){
                        weekRow.append($(`<td class="today">${daysCounter++}</td>`));
                    } else {
                        weekRow.append($(`<td>${daysCounter++}</td>`));
                    }
                } else {
                    weekRow.append($("<td></td>"));
                }
            }
        }
        tbody.append(weekRow);
    }
    container.append(tbody);
}