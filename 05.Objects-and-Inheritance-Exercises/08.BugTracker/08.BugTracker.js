let revModule = (function () {
    let idCounter = 0;

    function report(author, description, reproducible, severity) {
        let defaultStatus = "Open";
        let newBugReportElement = $(`<div id="report_${idCounter++}" class="report">
                                        <div class="body">
                                            <p>${description}</p>
                                        </div>
                                        <div class="title">
                                            <span class="author">Submitted by: ${author}</span>
                                            <span class="status">${defaultStatus} | ${severity}</span>
                                        </div>
                                     </div>`);
        $("#content").append(newBugReportElement);
    }

    function setStatus(id, newStatus) {
        let severity = $(`#report_${id} .title .status`)[0].innerHTML.split(" | ")[1];
        $(`#report_${id} .title .status`)[0].innerHTML = `${newStatus} | ${severity}`;
    }

    function remove(id) {
        let bugReportForRemoving = $(`#report_${id}`);
        bugReportForRemoving.remove();
    }

    function sort(method) {
        let $bugReportsList = $("#content > div");
        console.log($bugReportsList);
        let $bugReportsSortedList = $bugReportsList.sort((a,b) => b.id - a.id);
        $bugReportsList.detach();
        $bugReportsSortedList.appendTo($("#content"));
    }

    function output(selector) {
        return null;
    }

    return {report, setStatus, remove, sort, output};
})();