// Akash Electronics Website Script

document.addEventListener("DOMContentLoaded", function () {

    // Product Animation
    const products = document.querySelectorAll(".product");

    products.forEach((product, index) => {
        product.style.opacity = "0";
        product.style.transform = "translateY(40px)";

        setTimeout(() => {
            product.style.transition = "0.6s";
            product.style.opacity = "1";
            product.style.transform = "translateY(0)";
        }, index * 150);
    });

    // Smooth Scroll
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // WhatsApp Button
    const whatsappBtn = document.querySelector(".btn");

    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", function () {
            alert("Redirecting to WhatsApp...");
        });
    }

});

console.log("Akash Electronics Website Loaded Successfully");
