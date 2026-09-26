function nextPage(pageNumber) {

    // Find all pages
    const pages =
        document.querySelectorAll(".page");


    // Hide every page
    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    // Show the selected page
    const selectedPage =
        document.getElementById(
            "page" + pageNumber
        );


    selectedPage.classList.add("active");

}