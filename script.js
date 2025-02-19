document.addEventListener("DOMContentLoaded", function () {
    console.log("Portafolio cargado correctamente.");
    
    let projects = document.querySelectorAll(".project-card");
    projects.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "5px 5px 15px rgba(255, 255, 255, 0.2)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});
