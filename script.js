const x = document.querySelector(".container-sosialmed")
const tombol = document.querySelector("#share")

tombol.addEventListener("click", function(event){

    if (x.style.display === "flex") {
        x.style.display = "none"; 
      } else {
        x.style.display = "flex";
      }
});