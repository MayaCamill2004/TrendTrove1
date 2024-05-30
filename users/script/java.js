
document.getElementById("hamburger-menu").addEventListener("click", function() {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("hidden")) {
        navbar.classList.remove("hidden");
        navbar.classList.add("open");
    } else {
        navbar.classList.remove("open");
        navbar.classList.add("hidden");
    }

    var grid = document.querySelector('.grid-container');
    var masonry = new Masonry(grid, {
        itemSelector: '.card',
        columnWidth: '.card',
        percentPosition: true,
        gutter: 20
    });
});
