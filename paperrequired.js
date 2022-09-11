function paperRequirements(book1, book2, book3) {
    var book1Pages = 100;
    var book2Pages = 200;
    var book3Pages = 300;
    var pagesBook1 = book1Pages * book1;
    var pagesBook2 = book2Pages * book2;
    var pagesBook3 = book3Pages * book3;

    var totalPages = pagesBook1 + pagesBook2 + pagesBook3;
    return totalPages;
}

var pagesCount = paperRequirements(200, 300, 400);
console.log(pagesCount);