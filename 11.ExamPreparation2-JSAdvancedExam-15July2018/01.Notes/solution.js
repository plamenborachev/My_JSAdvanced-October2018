function addSticker() {
    let titleInput = $(".title");
    let title = titleInput.val();
    let textInput = $(".content");
    let text = textInput.val();

    if (title && text){
        let noteLi = $("<li class='note-content'>");
        let xBtn = $("<a class='button'>x</a>");
        noteLi.append(xBtn)
            .append(`<h2>${title}</h2>`)
            .append("<hr>")
            .append($(`<p>${text}</p>`));
        $("#sticker-list").append(noteLi);

        titleInput.val("");
        textInput.val("");

        xBtn.on("click", function () {
            noteLi.remove();
        })
    }
}