document.body.innerHTML = ""
//création du formulaire
const inputX = document.createElement('input');
const boutonX = document.createElement('button');
inputX.id = 'monInputX';
// boutonX.value = 'Clic';
// Ajoute les éléments au body
document.body.appendChild(inputX);
document.body.appendChild(boutonX);
//ajout de l'évènement clic pour capter le moment ou le user valide le formulaire
boutonX.onclick = () => {
    const valeur = inputX.value;
    console.log("Valeur entrée :", valeur);

    var valFinal = 0;

    for (let i = 1; i <= parseInt(valeur); i++) {
        valFinal += i;
    }

    console.log(valFinal);

};