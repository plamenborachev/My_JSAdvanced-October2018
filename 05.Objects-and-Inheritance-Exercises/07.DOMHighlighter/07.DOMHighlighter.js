function domTraversal(selector) {
    let element = $(selector);
    let maxDepth = 0;
    let maxDepthElement = element;

    function findDeapestElement(depth, element) {
        if (depth > maxDepth){
            maxDepth = depth;
            maxDepthElement = $(element);
        }
        $(element).children().each((i,el) => findDeapestElement((depth + 1), el));
    }

    findDeapestElement(maxDepth, element);

    maxDepthElement.addClass("highlight");
    maxDepthElement.parentsUntil(element[0].parentNode).addClass("highlight");
}