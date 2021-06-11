const x = document.querySelector(".container-sosialmed")
const tombol = document.querySelector("#share")
const aktif = document.querySelector(".aktif")

tombol.addEventListener("click", function(event){

    if (aktif === null) {
        x.classList.toggle("aktif") 
        tombol.classList.toggle("aktif")
      } 
});