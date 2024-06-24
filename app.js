function integrale() {
    // Obtenir le modal
    var modal = document.getElementById("myModal");
    document.getElementById("label1").innerHTML = "Borne inférieure"
    modal.style.display = "block";
}

function somme() {
    // Obtenir le modal
    var modal = document.getElementById("myModal");
    document.getElementById("label1").innerHTML = "Borne d'en bas de la somme"
    modal.style.display = "block";
}

function closeModal() {
    // Obtenir l'élément <span> qui ferme le modal
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
    // Lorsque l'utilisateur clique sur le bouton de soumission
function submitModal() {
    var modal = document.getElementById("myModal");
    var field1 = document.getElementById("field1").value;
    var field2 = document.getElementById("field2").value;
    var field3 = document.getElementById("field3").value;

    // Traitez les valeurs ici comme vous le souhaitez
    console.log("Champ 1:", field1);
    console.log("Champ 2:", field2);
    console.log("Champ 3:", field3);

    // Fermez le modal après la soumission
    modal.style.display = "none";
}
