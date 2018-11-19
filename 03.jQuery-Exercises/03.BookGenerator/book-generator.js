function createBook(selector, title, author, isbn) {
    let bookGenerator = (function(){
        let id = 1;
        return function (selector, title, author, isbn){
            let selectorElement = $(selector);
            let bookDiv = $(`<div id="book${id++}" style="border: medium none"></div>`);
            let titleParagraph = $(`<p class="title">${title}</p>`);
            let authorParagraph = $(`<p class="author">${author}</p>`);
            let isbnParagraph = $(`<p class="isbn">${isbn}</p>`);

            function select() {
                bookDiv.css("border", "2px solid blue");
            }

            let selectBtn = $("<button>Select</button>").on('click', select);

            function deselect() {
                bookDiv.css("border", "none");
            }

            let deselectBtn = $("<button>Deselect</button>").on('click', deselect);
            bookDiv.append(titleParagraph, authorParagraph, isbnParagraph, selectBtn, deselectBtn);
            bookDiv.appendTo(selectorElement);
        }
    }());
    bookGenerator(selector, title, author, isbn);
}
