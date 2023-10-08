document.getElementById("burger").addEventListener("click", function hiddenElements() {
    var x = document.getElementById("items");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
});

document.getElementById("opciones").addEventListener("click", function hiddenElements() {
    var x = document.getElementById("opciones-desplegadas");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
});
