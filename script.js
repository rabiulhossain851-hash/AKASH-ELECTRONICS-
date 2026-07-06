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
