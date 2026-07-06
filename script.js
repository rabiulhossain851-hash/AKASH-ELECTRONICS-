document.addEventListener("DOMContentLoaded", function () {

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

document.querySelectorAll(".product").forEach(function(product){

if(product.innerText.toLowerCase().includes(value)){
product.style.display = "block";
}else{
product.style.display = "none";
}

});

});

}

});
const slides = document.querySelectorAll(".slide");

let current = 0;

if (slides.length > 0) {

    setInterval(function () {

        slides[current].classList.remove("active");

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        slides[current].classList.add("active");

    }, 3000);

}
