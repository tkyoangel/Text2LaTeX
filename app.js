function integrale() {
    // Obtenir le modal
    var modal = document.getElementById("myModal");
    document.getElementById("label1").innerHTML = "Borne inférieure de l'intégrale"
    document.getElementById("label2").innerHTML = "Borne supérieure de l'intégrale"
    document.getElementById("label3").innerHTML = "Fonction à intégrer"
    document.getElementById("modalType").innerHTML = "Ajout d'une intégrale"
    modal.style.display = "block";
}

function somme() {
    // Obtenir le modal
    var modal = document.getElementById("myModal");
    document.getElementById("label1").innerHTML = "Borne inférieure de la somme"
    document.getElementById("label2").innerHTML = "Borne supérieure de la somme"
    document.getElementById("label3").innerHTML = "Contenu de la somme"
    document.getElementById("modalType").innerHTML = "Ajout d'une somme"
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
    let a = document.getElementById("field1").value;
    let b = document.getElementById("field2").value;
    let c = document.getElementById("field3").value;

    // Fermez le modal après la soumission
    modal.style.display = "none";
    let TypeDeModal = document.getElementById("modalType").innerHTML
    if(TypeDeModal == "Ajout d'une intégrale"){
        let textArea = document.getElementById("latex")
        textArea.value += "\\" + "int_{" + a + "}^{" + b + "} " + c;
    }
    if(TypeDeModal == "Ajout d'une somme"){
        let textArea = document.getElementById("latex")
        textArea.value += "\\" + "sum_{" + a + "}^{" + b + "} " + c;
    }
}
