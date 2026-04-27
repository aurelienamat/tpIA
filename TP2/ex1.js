//création du formulaire
const inputX = document.createElement('input');
const input1 = document.createElement('input');
const boutonX = document.createElement('button');
inputX.id = 'monInputX';
input1.id = 'monInput1';
// boutonX.value = 'Clic';
// Ajoute les éléments au body
document.body.appendChild(inputX);
document.body.appendChild(input1);
document.body.appendChild(boutonX);
//ajout de l'évènement clic pour capter le moment ou le user valide le formulaire
boutonX.onclick = () => {
    const valeur = inputX.value;
    console.log("Valeur entrée :", valeur);

    const valeur1 = input1.value;
    console.log("Valeur entrée :", valeur1);

    const valeurFin = parseInt(input1.value) + parseInt(inputX.value);
    console.log("Valeur fin : " + valeurFin);
};