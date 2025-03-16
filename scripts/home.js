document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search-btn");
    const searchBar = document.getElementById("search-bar");

    // Search Functionality
    searchBtn.addEventListener("click", () => {
        let query = searchBar.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
        } else {
            alert("Please enter a search term.");
        }
    });

    // Icon Hover Effect
    const icons = document.querySelectorAll(".category-icon");
    icons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.border = "2px solid var(--primary-color)";
            icon.style.padding = "10px";
            icon.style.borderRadius = "50%";
        });

        icon.addEventListener("mouseleave", () => {
            icon.style.border = "none";
            icon.style.padding = "0";
        });
    });
});
