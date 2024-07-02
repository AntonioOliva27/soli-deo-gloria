document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".according");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", function() {
            // Toggle the active class for the button
            this.classList.toggle("active");

            // Get the panel content associated with this button
            const panel = this.nextElementSibling;

            // Toggle the max-height of the panel content
            if (panel.style.maxHeight === "0px" || panel.style.maxHeight === "") {
                panel.style.maxHeight = "200px"; // Set to a smaller fixed height
                panel.classList.add("active");
            } else {
                panel.style.maxHeight = "0";
                panel.classList.remove("active");
            }
        });
    });
});
